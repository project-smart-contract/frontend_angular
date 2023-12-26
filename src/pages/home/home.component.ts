import { Component } from '@angular/core';
import {
  faUser,
  faUsers,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  faUser = faUser;
  faUsers = faUsers;
  faCircleInfo = faCircleInfo;
  imgGem: any = 'assets/svgicons/gem.svg';
  imgDiamondEmpty: any = 'assets/svgicons/diamond-empty.svg';

  constructor() {}
}
