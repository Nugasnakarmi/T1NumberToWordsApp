import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NumberConverterService } from '../../services/number-converter.service';
import { catchError, Observable, of, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { ConversionMode } from '../../enums/mode.enum';

@Component({
  selector: 'app-number-converter',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, MatRadioModule],
  templateUrl: './number-converter.component.html',
  styleUrl: './number-converter.component.scss',
})
export class NumberConverterComponent {
  numberConverterService = inject(NumberConverterService);
  formGroup: UntypedFormGroup = new UntypedFormGroup({});
  error = '';
  interpretedString$: Observable<any> = new Observable<any>();
  modeSelected = 0;
  readonly ConversionMode = ConversionMode;
  ngOnInit(): void {
    this.formGroup = new UntypedFormGroup({
      number: new UntypedFormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(9999999999999999.99),
      ]),
      mode: new UntypedFormControl(1, [Validators.required]),
    });
  }
  onChange(): void {
    if (this.formGroup.valid) {
      this.interpretedString$ = this.numberConverterService
        .interpretNumberToWords$(
          this.formGroup.value.number,
          this.formGroup.value.mode
        )
        .pipe(
          tap(() => {
            this.error = '';
          }),
          catchError((err) => (this.error = err.error))
        );
    }

    if (!this.formGroup.valid) {
      this.interpretedString$ = of(null); //Set interpreted string to null value
    }
  }
}
