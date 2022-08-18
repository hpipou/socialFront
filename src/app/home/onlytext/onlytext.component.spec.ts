import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlytextComponent } from './onlytext.component';

describe('OnlytextComponent', () => {
  let component: OnlytextComponent;
  let fixture: ComponentFixture<OnlytextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlytextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlytextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
