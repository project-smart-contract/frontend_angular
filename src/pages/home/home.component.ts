import { Component } from '@angular/core';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  faUser = faUser;
  faUsers = faUsers;
  imgGem: any = 'assets/svgicons/gem.svg';
  constructor() {}
}
