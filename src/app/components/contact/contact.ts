import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

  sendEmail(e: Event) {
    e.preventDefault();
    console.log('Enviando...');

    const form = document.querySelector('.form') as HTMLFormElement;

    emailjs.sendForm(
      'service_ojnpyuu',
      'template_pv4fvbo',
      form,
      'JA24JiIonSxQxJDCQ'
    ).then(() => {
      alert('Mensaje enviado correctamente');
    }).catch((error) => {
      console.log('Error:', error);
      alert('Error al enviar el mensaje');
    });
  }
}