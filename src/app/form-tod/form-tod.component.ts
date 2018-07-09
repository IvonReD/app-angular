import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tod',
  templateUrl: './form-tod.component.html',
  styleUrls: ['./form-tod.component.css']
})
export class FormTodComponent implements OnInit {

rForm: FormGroup;
post: any;
description: String = '';
name: String = '';
titleAlert: String = 'Ingrese Datos';

constructor(private fb: FormBuilder) {
  this.rForm = fb.group({
    'name' : [null, Validators.required],
    'description' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
    'validate': ''
  });
 }

 ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(5)]);
          this.titleAlert = ' Escribe al menos 5 caracteres';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
 }

addPost(post) {
  this.description = 'Descripcion: ' + post.description;
  this.name = 'Nombre tarea: ' + post.name;
}
}

