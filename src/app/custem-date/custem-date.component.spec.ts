import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustemDateComponent } from './custem-date.component';

describe('CustemDateComponent', () => {
  let component: CustemDateComponent;
  let fixture: ComponentFixture<CustemDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustemDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustemDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
