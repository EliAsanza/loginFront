import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDataTablaComponent } from './users-data-tabla.component';

describe('UsersDataTablaComponent', () => {
  let component: UsersDataTablaComponent;
  let fixture: ComponentFixture<UsersDataTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDataTablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDataTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
