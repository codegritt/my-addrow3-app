import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterChildComponent } from './master-child.component';

describe('MasterChildComponent', () => {
  let component: MasterChildComponent;
  let fixture: ComponentFixture<MasterChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
