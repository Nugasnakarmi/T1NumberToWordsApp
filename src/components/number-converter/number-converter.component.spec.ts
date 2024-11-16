import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberConverterComponent } from './number-converter.component';

describe('NumberConverterComponent', () => {
  let component: NumberConverterComponent;
  let fixture: ComponentFixture<NumberConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
