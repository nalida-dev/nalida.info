import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionPostViewComponent } from './introduction-post-view.component';

describe('IntroductionPostViewComponent', () => {
  let component: IntroductionPostViewComponent;
  let fixture: ComponentFixture<IntroductionPostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionPostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
