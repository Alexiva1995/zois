import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Candles1Page } from './candles1.page';

describe('Candles1Page', () => {
  let component: Candles1Page;
  let fixture: ComponentFixture<Candles1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Candles1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
