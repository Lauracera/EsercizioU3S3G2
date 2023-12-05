import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent implements OnInit {
  form!: FormGroup;
  generi = ['uomo', 'donna'];

  password1 = '';
  password2 = '';

  constructor(private fb: FormBuilder) {}

  // validPsw(formC: FormControl) {
  //   if ((this.password1 !== this.password2).includes(formC.value)) {
  //     return { 'Le password non coincidono': true };
  //   } else {
  //     return null;
  //   }
  // }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: this.fb.control(null),
      cognome: this.fb.control(null),
      password: this.fb.control(null),
      confermaPassword: this.fb.control(null),
      genere: this.fb.control('donna'),
      immagineProfilo: this.fb.control(null),
      biografia: this.fb.control(null),
      username: this.fb.control(null),
    });
  }

  getErrorsC(name: string, error: string) {
    return this.form.get(name)?.errors![error];
  }

  getFormControl(name: string) {
    return this.form.get(name);
  }

  submit() {
    console.log(this.form);
    console.log('form inviato');
    this.form.reset();
  }
}
