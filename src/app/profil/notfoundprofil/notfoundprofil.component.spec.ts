import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundprofilComponent } from './notfoundprofil.component';

describe('NotfoundprofilComponent', () => {
  let component: NotfoundprofilComponent;
  let fixture: ComponentFixture<NotfoundprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundprofilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
