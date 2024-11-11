import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BitcoinPage } from './bitcoin.page';

describe('BitcoinPage', () => {
  let component: BitcoinPage;
  let fixture: ComponentFixture<BitcoinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BitcoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
