import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-radio-question',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './radio-question.component.html',
  styleUrl: './radio-question.component.scss'
})
export class RadioQuestionComponent {
  @Input() questionText: string = '';
  @Input() options: string[] = [];
  answer: any;
}
