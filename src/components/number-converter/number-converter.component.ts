import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NumberConverterService } from '../../services/number-converter.service';
import { map, Observable } from 'rxjs';
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
  form: UntypedFormGroup = new UntypedFormGroup({});
  interpretedString$: Observable<string> = new Observable<string>();

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      number: new UntypedFormControl('', Validators.required),
    });
  }
  onSubmit(formData: any): void {
    this.interpretedString$ =
      this.numberConverterService.interpretNumberToWords$(formData.number);
  }
}
