import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundauthComponent } from './notfoundauth.component';

describe('NotfoundauthComponent', () => {
  let component: NotfoundauthComponent;
  let fixture: ComponentFixture<NotfoundauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundauthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
