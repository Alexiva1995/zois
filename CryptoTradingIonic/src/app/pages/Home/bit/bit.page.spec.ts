import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BitPage } from './bit.page';

describe('BitPage', () => {
  let component: BitPage;
  let fixture: ComponentFixture<BitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
