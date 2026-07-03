import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_ojnpyuu',
      'template_pv4fvbo',
      e.target as HTMLFormElement,
      'JA24JiIonSxQxJDCQ'
    ).then(() => {
      alert('Mensaje enviado correctamente');
    }).catch(() => {
      alert('Error al enviar el mensaje');
    });
  }
}