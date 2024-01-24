import { Component, Input } from '@angular/core';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-text-question',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatCardModule, FormsModule],
  templateUrl: './text-question.component.html',
  styleUrl: './text-question.component.scss'
})
export class TextQuestionComponent {
  @Input() questionText: string = '';
  answer: any;
  constructor(public questionnaireService: QuestionnaireService) {}

}
