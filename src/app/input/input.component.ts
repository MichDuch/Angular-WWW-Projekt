import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() addItem = new EventEmitter();

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    /*
      Zamiast wykorzystywać (ngModel) znalazłem w dokumentacji wygodniejsze rozwiazanie zarządzania elementem <input />
      tj. FormsModule oraz ReactiveFormsModule
    */
    this.form = new FormGroup({
      myCtrl: new FormControl('', Validators.required),
    });
  }

  submitForm() {
    this.addItem.emit(this.form.value.myCtrl);
    this.clearForm();
  }

  clearForm() {
    this.form.controls.myCtrl.patchValue('');
  }

}
