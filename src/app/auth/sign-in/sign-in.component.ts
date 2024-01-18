import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  showModal:boolean=true;

  constructor(private renderer: Renderer2) {}


  closeModal() {
    this.showModal = false;
    // Utilisation de Renderer2 pour manipuler le DOM
  const modalElement = document.getElementById('modalSignin');
  if (modalElement) {
    this.renderer.setStyle(modalElement, 'display', 'none');
  }
  }


}
