import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleComponent } from './page-title.component';
import { By } from '@angular/platform-browser';

describe('PageTitleComponent', () => {
  let component: PageTitleComponent;
  let fixture: ComponentFixture<PageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('component.title', () => {
    it('should show Title @Input in an HTML p tag with id="title', () => {
      component.title = 'test title';
      fixture.detectChanges();
      const htmlContent = fixture.debugElement.query(By.css('#title')).nativeElement.textContent
      expect(htmlContent).toEqual('test title');
    });
  })
});
