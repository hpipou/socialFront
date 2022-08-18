import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostdislikedComponent } from './mostdisliked.component';

describe('MostdislikedComponent', () => {
  let component: MostdislikedComponent;
  let fixture: ComponentFixture<MostdislikedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostdislikedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostdislikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
