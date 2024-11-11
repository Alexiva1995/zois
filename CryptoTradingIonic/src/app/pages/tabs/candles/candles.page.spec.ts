import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandlesPage } from './candles.page';

describe('CandlesPage', () => {
  let component: CandlesPage;
  let fixture: ComponentFixture<CandlesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CandlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
