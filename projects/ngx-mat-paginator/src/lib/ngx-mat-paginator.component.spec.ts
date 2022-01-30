import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatPaginatorComponent } from './ngx-mat-paginator.component';

describe('NgxMatPaginatorComponent', () => {
  let component: NgxMatPaginatorComponent;
  let fixture: ComponentFixture<NgxMatPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
