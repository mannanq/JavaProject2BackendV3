import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { getAllUsersComponent } from './getAllUsers.component';

describe('getAllUsersComponent', () => {
  let component: getAllUsersComponent;
  let fixture: ComponentFixture<getAllUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ getAllUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(getAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
