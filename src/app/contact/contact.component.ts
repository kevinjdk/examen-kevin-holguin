import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Asegúrate de que el nombre del atributo es `styleUrls`
})
export class ContactComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', [Validators.required]], 
      email: ['', [Validators.required, Validators.email]], 
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitForm() {
    if (this.formulario.valid) {
      alert('El formulario se ha enviado exitosamente');
      console.log(this.formulario.value);
    } else {
      const nameControl = this.formulario.get('name');
      const emailControl = this.formulario.get('email');
      const messageControl = this.formulario.get('message');

      if (nameControl?.errors?.['required']) {
        alert('El nombre es requerido.');
      }
      if (emailControl?.errors?.['required']) {
        alert('El correo electrónico es requerido.');
      }
      if (emailControl?.errors?.['email']) {
        alert('El correo electrónico debe tener un formato válido.');
      }
      if (messageControl?.errors?.['required']) {
        alert('El mensaje es requerido.');
      }
      if (messageControl?.errors?.['minlength']) {
        alert('El mensaje debe tener al menos 10 caracteres.');
      }
    }
  }
}
