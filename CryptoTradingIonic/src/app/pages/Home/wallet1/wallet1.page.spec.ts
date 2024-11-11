import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Wallet1Page } from './wallet1.page';

describe('Wallet1Page', () => {
  let component: Wallet1Page;
  let fixture: ComponentFixture<Wallet1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Wallet1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
