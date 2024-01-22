import { Component, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepTrackerIconsComponent } from '../step-nav/step-tracker-icons.component';
import { CommonModule } from '@angular/common';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { TextQuestionComponent } from '../../componnents/text-question/text-question.component';
import { NumberQuestionComponent } from '../../componnents/number-question/number-question.component';
import { RadioQuestionComponent } from '../../componnents/radio-question/radio-question.component';
import { DynamicQuestionDirective } from '../dynamic-question.directive';  


@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule,StepTrackerIconsComponent,FormsModule]
})
export class FormComponent implements OnInit {
  stepForm!: FormGroup;
  activeStep$: number | undefined;

  dynamicComponentRef!: ComponentRef<any>;


  constructor(
    public questionnaireService: QuestionnaireService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.loadDynamicComponent();
  }

  onNextStep() {
    // Log the answer when the button is clicked
    console.log('Answer:', this.dynamicComponentRef.instance.answer);
  }

  
  loadDynamicComponent() {
    const questionType = this.questionnaireService.currentQuestion;
    console.log(questionType)
    let dynamicComponent: any;

    switch (questionType.type) {
      case 'text':
        dynamicComponent = TextQuestionComponent;
        break;
      case 'radio':
        dynamicComponent = RadioQuestionComponent;
        break;
      case 'number':
        dynamicComponent = NumberQuestionComponent;  // Use your actual number input component
        break;
      default:
        console.error('Unsupported question type:', questionType);
        return;
    }

    console.log(dynamicComponent)

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicComponent);

    // Clear existing components in the view container
    this.viewContainerRef.clear();

    // Create the component
    this.dynamicComponentRef = this.viewContainerRef.createComponent(componentFactory, 0, this.injector);

    // Set input properties based on the question type
    this.dynamicComponentRef.instance.questionText = this.questionnaireService.currentQuestion.text;
    
    if (questionType.type == 'radio') {
      this.dynamicComponentRef.instance.options = this.questionnaireService.currentQuestion.options;
    }
    console.log(this.dynamicComponentRef.instance.questionText)
    console.log(this.dynamicComponentRef.instance.options)
    
  }

  ngOnDestroy() {
    if (this.dynamicComponentRef) {
      this.dynamicComponentRef.destroy();
    }
  }
}


