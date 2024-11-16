import { Component, inject } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NumberConverterService } from '../../services/number-converter.service';
import { map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-number-converter',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './number-converter.component.html',
  styleUrl: './number-converter.component.scss',
})
export class NumberConverterComponent {
  numberConverterService = inject(NumberConverterService);
  formGroup: UntypedFormGroup = new UntypedFormGroup({});

  interpretedString$: Observable<any> = new Observable<any>();

  ngOnInit(): void {
    this.formGroup = new UntypedFormGroup({
      number: new UntypedFormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }
  onChange(): void {
    this.interpretedString$ = this.numberConverterService
      .interpretNumberToWords$(this.formGroup.value.number)
      .pipe(tap((res) => console.log));
  }
}
