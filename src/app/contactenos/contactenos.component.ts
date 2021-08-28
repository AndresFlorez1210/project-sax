import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss']
})
export class ContactenosComponent implements OnInit {

  contactForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
      const email = this.contactForm.value;
      const mensaje = 'El usuario '+email.name+' con celular '+email.phone+' y correo '+email.email+ ' esta interesado en el siguiente servicio '+email.service+' y adjunto el siguiente mensaje '+email.message;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      console.log(mensaje);
      this.http.post('https://formspree.io/f/mjvjpndp',
        { name: email.name, replyto: email.email, message: mensaje },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
  }

}
