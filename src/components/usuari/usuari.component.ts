import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuari',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
  idiomes: {value: string, label: string}[] = [
    {value: "cat", label: "Català"},
    {value: "esp", label: "Espanyol"},
    {value: "eng", label: "Anglès"},
    {value: "fre", label: "Francès"},
    {value: "ita", label: "Italià"},
    ].sort((a,b) => a.label.localeCompare(b.label));
  submit () {
    console.log("Formulari enviat", this.nom, this.email, this.password, this.repeatpassword, this.idioma,this.gender, this.acceptTerms);
  }
}
