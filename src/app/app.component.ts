import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariComponent } from "../components/usuari/usuari.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuariComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
