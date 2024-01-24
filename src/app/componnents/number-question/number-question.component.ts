import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-number-question',
  standalone: true,
  imports: [MatCardModule,FormsModule],
  templateUrl: './number-question.component.html',
  styleUrl: './number-question.component.scss'
})
export class NumberQuestionComponent {
  @Input() questionText: string = '';
  answer: any;
}
