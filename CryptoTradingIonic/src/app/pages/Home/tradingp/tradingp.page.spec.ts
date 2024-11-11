import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradingpPage } from './tradingp.page';

describe('TradingpPage', () => {
  let component: TradingpPage;
  let fixture: ComponentFixture<TradingpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TradingpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
