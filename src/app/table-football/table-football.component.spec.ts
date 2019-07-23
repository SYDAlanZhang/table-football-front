import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFootballComponent } from './table-football.component';

describe('TableFootballComponent', () => {
  let component: TableFootballComponent;
  let fixture: ComponentFixture<TableFootballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFootballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
