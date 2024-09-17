import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuari',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuari.component.html',
  styleUrl: './usuari.component.css'
})
export class UsuariComponent {

  nom!: string;
  email!: string;
  password!: string;
  repeatpassword!: string;
  acceptTerms!: boolean;
  gender!: string;
  idioma = "cat";

  submit () {
    console.log("Formulari enviat", this.nom, this.email, this.password, this.repeatpassword, this.idioma,this.gender, this.acceptTerms);
  }
}
