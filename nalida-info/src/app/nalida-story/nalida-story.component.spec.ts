import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalidaStoryComponent } from './nalida-story.component';

describe('NalidaStoryComponent', () => {
  let component: NalidaStoryComponent;
  let fixture: ComponentFixture<NalidaStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalidaStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalidaStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
