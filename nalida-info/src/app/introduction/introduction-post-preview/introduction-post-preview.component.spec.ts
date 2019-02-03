import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionPostPreviewComponent } from './introduction-post-preview.component';

describe('IntroductionPostPreviewComponent', () => {
  let component: IntroductionPostPreviewComponent;
  let fixture: ComponentFixture<IntroductionPostPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionPostPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionPostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
