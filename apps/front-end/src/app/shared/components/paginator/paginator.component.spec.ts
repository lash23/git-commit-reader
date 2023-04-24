import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';
import { IListCommitItem } from '../../../../../../../interfaces/IListCommitItem';

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

const listCommitResponseMock = [commitListItemMock, commitListItemMock];
interface IPaginationButton {
  page: number;
}

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    component.entryItems = listCommitResponseMock;
    component.breakPage = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit()', () => {
    it('should call component.spySetPaginator() and component.setCommitList()', () => {
      let spySetPaginator = spyOn(component, 'setPaginator');
      let spySetCommitList = spyOn(component, 'setCommitList');

      component.ngOnInit();
      expect(spySetPaginator).toHaveBeenCalled();
      expect(spySetCommitList).toHaveBeenCalled();
    });
  })

  describe('setPaginator()', () => {
    it('should fill component.totalPages with the division between component.entryItems.length and component.breakPage', () => {
      const expectedResult = Math.ceil(component.entryItems.length / component.breakPage);
      component.setPaginator();

      expect(component.totalPages).toEqual(expectedResult);
    })

    it(`should fill component.paginatorButtons with an Array which length is equal to component.totalPages
        and their values belongs to IPaginationButton interface`,
      () => {
        const expectedResult: IPaginationButton[] = [{page: 1}]; // since component.totalPages is setted to 1
        component.setPaginator();

        expect(component.paginatorButtons).toEqual(expectedResult);
      })
  })

  describe('setCommitList()', () => {
    it(('should slice component.entryItems to get an array which length is less than or equal to component.breakPage'), () => {
      spyOn(component, 'setItems').and.callFake(() => {});
      component.setCommitList();
      expect(component.itemsToShow.length).toBeLessThanOrEqual(component.breakPage);
    })
  })

  describe('setItems()', () => {
    it('should call emitItems.emit method', () => {
      const spyEmit = spyOn(component.emitItems, 'emit');
      component.setItems();

      expect(spyEmit).toHaveBeenCalled();
    })
  })

  describe('nextPage()', () => {
    beforeEach(() => {
      component.paginatorButtons = [{page: 1}, {page: 2}];
    })

    it('should call component.setCommitList method', () => {
      const spySetCommitList = spyOn(component, 'setCommitList');
      component.nextPage();

      expect(spySetCommitList).toHaveBeenCalled();
    })

    it('should do nothing if component.currentPage is already the last page in component.paginatorButtons', () => {
      component.currentPage = 2;
      const spySetCommitList = spyOn(component, 'setCommitList');
      component.nextPage();
      expect(spySetCommitList).not.toHaveBeenCalled();
    })

    it('should increase component.currentPage by one', () => {
      component.currentPage = 1;
      const expectedValue = component.currentPage + 1;
      spyOn(component, 'setCommitList');
      component.nextPage();
      expect(component.currentPage).toEqual(expectedValue);
    })
  })

  describe('previousPage()', () => {
    beforeEach(() => {
      component.paginatorButtons = [{page: 1}, {page: 2}];
    })

    it('should call component.setCommitList method', () => {
      component.currentPage = 2;
      const spySetCommitList = spyOn(component, 'setCommitList');
      component.previousPage();

      expect(spySetCommitList).toHaveBeenCalled();
    })

    it('should do nothing if component.currentPage is already the first page in component.paginatorButtons', () => {
      component.currentPage = 1;
      const spySetCommitList = spyOn(component, 'setCommitList');
      component.previousPage();
      expect(spySetCommitList).not.toHaveBeenCalled();
    })

    it('should decrease component.currentPage by one', () => {
      component.currentPage = 2;
      const expectedValue = component.currentPage - 1;
      spyOn(component, 'setCommitList');
      component.previousPage();
      expect(component.currentPage).toEqual(expectedValue);
    })
  })
});
