import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMailstatusComponent } from './confirm-mailstatus.component';

describe('ConfirmMailstatusComponent', () => {
  let component: ConfirmMailstatusComponent;
  let fixture: ComponentFixture<ConfirmMailstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmMailstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMailstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
