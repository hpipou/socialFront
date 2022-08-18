import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyimageComponent } from './onlyimage.component';

describe('OnlyimageComponent', () => {
  let component: OnlyimageComponent;
  let fixture: ComponentFixture<OnlyimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
