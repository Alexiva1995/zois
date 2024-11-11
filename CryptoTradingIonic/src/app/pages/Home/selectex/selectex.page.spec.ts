import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectexPage } from './selectex.page';

describe('SelectexPage', () => {
  let component: SelectexPage;
  let fixture: ComponentFixture<SelectexPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
