import { Component, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepTrackerIconsComponent } from '../step-nav/step-tracker-icons.component';
import { CommonModule } from '@angular/common';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { TextQuestionComponent } from '../../componnents/text-question/text-question.component';
import { NumberQuestionComponent } from '../../componnents/number-question/number-question.component';
import { RadioQuestionComponent } from '../../componnents/radio-question/radio-question.component';
import { Router } from '@angular/router';

export interface Response{
  id:number;
  value:any;
}

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, StepTrackerIconsComponent, FormsModule]
})
export class FormComponent implements OnInit {

  

  dynamicComponentRef!: ComponentRef<any>;


  constructor(
    public questionnaireService: QuestionnaireService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private router : Router,
  ) {}


  ngOnInit(): void {
    this.loadDynamicComponent(); 
  }

  onNextStep() {
    // const currentQuestionId = this.questionnaireService.currentQuestion.id;
    const answer = this.dynamicComponentRef.instance.answer
    
    // save the answer
    this.questionnaireService.recordAnswer(this.questionnaireService.currentQuestion!.id,answer);
    //get the next question to ask
    this.questionnaireService.getNextQuestions(answer)

     // Check if all questions are completed
     if (this.questionnaireService.isQuestionnaireComplete()) {
      // If complete, show a different component and trigger sendToAPI
      this.showCompletionComponent();
      this.questionnaireService.sendToAPI();
    } else {
      // If not complete, load the next dynamic component
      this.loadDynamicComponent();
    }
  
  }

  showCompletionComponent() {
    console.log('Questionnaire completed! Navigating to formules component.');
    this.viewContainerRef.clear();
    // this.router.navigate(['/your-target-page']);
  }

  loadDynamicComponent() {
    const questionType = this.questionnaireService.currentQuestion;
    // console.log(questionType)
    let dynamicComponent: any;

    switch (questionType!.type) {
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

    // console.log(dynamicComponent)

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicComponent);

    // Clear existing components in the view container
    this.viewContainerRef.clear();

    // Create the component
    this.dynamicComponentRef = this.viewContainerRef.createComponent(componentFactory, 0, this.injector);

    // Set input properties based on the question type
    this.dynamicComponentRef.instance.questionText = this.questionnaireService.currentQuestion!.text;
    
    if (questionType!.type == 'radio') {
      this.dynamicComponentRef.instance.options = this.questionnaireService.currentQuestion!.options;
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


