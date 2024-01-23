import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'jumbotron',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.scss'
})
export class JumbotronComponent {

  constructor(private router: Router ){}
  navigate(){
    this.router.navigate(['/recommendation']);
  }
}
