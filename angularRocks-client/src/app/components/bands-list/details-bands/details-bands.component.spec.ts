import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBandsComponent } from './details-bands.component';

describe('DetailsBandsComponent', () => {
  let component: DetailsBandsComponent;
  let fixture: ComponentFixture<DetailsBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
