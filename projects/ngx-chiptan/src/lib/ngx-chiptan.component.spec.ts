import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChiptanComponent } from './ngx-chiptan.component';

describe('NgxChiptanComponent', () => {
  let component: NgxChiptanComponent;
  let fixture: ComponentFixture<NgxChiptanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChiptanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChiptanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
