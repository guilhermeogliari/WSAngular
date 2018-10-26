import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacionalComponent } from './transacional.component';

describe('TransacionalComponent', () => {
  let component: TransacionalComponent;
  let fixture: ComponentFixture<TransacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
