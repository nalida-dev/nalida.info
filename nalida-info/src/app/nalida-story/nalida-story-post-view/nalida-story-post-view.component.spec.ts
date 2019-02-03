import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalidaStoryPostViewComponent } from './nalida-story-post-view.component';

describe('NalidaStoryPostViewComponent', () => {
  let component: NalidaStoryPostViewComponent;
  let fixture: ComponentFixture<NalidaStoryPostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalidaStoryPostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalidaStoryPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
