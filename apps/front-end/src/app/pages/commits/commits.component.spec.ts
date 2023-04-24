import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CommitsComponent } from './commits.component';
import { CommonModule } from '@angular/common';
import { CommitsRoutingModule } from './commits-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CommitsService } from '../../services/commits.service';
import { of } from 'rxjs';
import { IListCommitItem } from '../../../../../../interfaces/IListCommitItem';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const commitListItemMock: IListCommitItem = {
  comments_url: '',
  url: '',
  sha: '',
  node_id: '',
  html_url: '',
  committer: {
    date: '',
    email: '',
    name: '',
  },
  commit: {
    author: {
      date: '',
      email: '',
      name: '',
    },
    comment_count: 0,
    message: '',
    url: '',
    committer: {
      date: '',
      email: '',
      name: '',
    }
  }
}

const listCommitResponseMock = [commitListItemMock];
class CommitServiceMock {
  listCommits() {
    return of(listCommitResponseMock);
  }
}

describe('CommitsComponent', () => {
  let component: CommitsComponent;
  let fixture: ComponentFixture<CommitsComponent>;
  let commitServiceMock: CommitServiceMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsComponent ],
      imports: [
        CommonModule,
        CommitsRoutingModule,
        SharedModule
      ],
      providers: [
        { provide: CommitsService, useClass: CommitServiceMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    commitServiceMock = new CommitServiceMock();
    fixture = TestBed.createComponent(CommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit()', () => {
    it('should call component.listCommits()', () => {
      let spyListCommits = spyOn(component, 'listCommits');

      component.ngOnInit();
      expect(spyListCommits).toHaveBeenCalled();
    });
  })

  describe('listCommits()', () => {
    it('should call service.listCommits()', () => {
      const service = fixture.debugElement.injector.get(CommitsService);
      const spyServiceCall = spyOn(service, 'listCommits');
      spyServiceCall.and.callFake(() => of(listCommitResponseMock));
      component.listCommits();
      expect(spyServiceCall).toHaveBeenCalled();
    });
  })
});
