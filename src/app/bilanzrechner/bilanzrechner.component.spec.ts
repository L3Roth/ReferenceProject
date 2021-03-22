import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanzrechnerComponent } from './bilanzrechner.component';

describe('BilanzrechnerComponent', () => {
  let component: BilanzrechnerComponent;
  let fixture: ComponentFixture<BilanzrechnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanzrechnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanzrechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
