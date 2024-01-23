import { Injectable } from '@angular/core';

// questionnaire.model.ts
export interface Question {
  id: string;
  text: string;
  type: 'text' | 'number' | 'radio';
  options?: string[]; // Only for 'radio' type questions
}


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  questionnaire: Question[] = [
    /* 0  */  { id: 'occupation', text: 'What is your occupation?', type: 'text' },
    /* 1  */  { id: 'age', text: 'When is your age?', type: 'number' },
    /* 2  */  { id: 'vehicle_type', text: 'What is your vehicle type?', type: 'radio' , options: ['motorcycle', 'car', 'truck','bus','boat']},
    /* 3  */  { id: 'vehicle_make', text: 'What is your vehicle make?', type: 'text' },
    /* 4  */  { id: 'vehicle_model', text: 'What is your vehicle model?', type: 'text' },
    /* 5  */  { id: 'vehicle_year', text: 'What is your vehicle year?', type: 'number' },
    /* 6  */  { id: 'number_insured_vehicles', text: 'How many vehicles you want to ensure?', type: 'number' },
    /* 7  */  { id: 'number_seats', text: 'How many seats you want to ensure?', type: 'number' },
    /* 8  */  { id: 'business_field', text: 'What is your business field?', type: 'text' },
    /* 9  */  { id: 'parent', text: 'How would you describe your current living situation?', type: 'radio',options: ['Living with family or children', 'Living alone'] },
    /* 10 */  { id: 'www', text: 'do you want to ensure a brand new vehicle or not?', type: 'radio',options: ['yes', 'no'] },
  ];
    
    

  constructor() { }

  step = 0;
  currentStep = {
    indices: [0],
    currentIndex: 0,
  };
  answers: any = {  // Initialize with predefined fields and null values
    fullname: null,
    age: null,
    parent: null,
    occupation: null,
    www: null,
    vehicle_type: null,
    vehicle_make: null,
    vehicle_model: null,
    vehicle_year: null,
    number_seats: null,
    business_field: null,
    number_insured_vehicles: null,
    timestamp: null,
  };

  get currentQuestion() {
    if (this.step === 0) {
      return this.questionnaire[0];
    } else {
      // console.log("===",this.currentStep.indices)
      const index = this.currentStep.indices[this.currentStep.currentIndex];
      // console.log("index",index)
      // this.currentStep.currentIndex++;
      return this.questionnaire[index];
    }
  }
  
  getNextQuestions(answer: any) {
    this.step++;
    this.currentStep.currentIndex++;
    if (this.step === 1) {
      if (answer === 'CEO') {
        this.currentStep.indices = [0, 8, 2, 6];
      } else if (answer === 'taxi owner') {
        this.currentStep.indices = [0, 8, 2, 3, 4, 7];
      } else {
        this.currentStep.indices = [0, 9, 10, 2, 3, 4, 5];
      }
    }
    if (this.step==this.currentStep.indices.length) {
      console.log("done!!");
    }
  }

  recordAnswer(field: string, answer: any): void {
    this.answers[field] = answer;
    // console.log(this.answers);
  }

  isQuestionnaireComplete(): boolean {
    return this.step === this.currentStep.indices.length;
  }
  sendToAPI(): any {
    // constructing the object i want to send
    const object = { 
      fullname: null,
      age: null,
      parent: this.answers.parent,
      occupation: this.answers.occupation,
      www: this.answers.www,
      vehicle_type: this.answers.vehicle_type,
      vehicle_make: this.answers.vehicle_make,
      vehicle_model: this.answers.vehicle_model,
      vehicle_year: this.answers.vehicle_year,
      number_seats: this.answers.number_seats,
      business_field: this.answers.business_field,
      number_insured_vehicles: this.answers.number_insured_vehicles,
      timestamp: null,
    };

    if (this.answers.vehicle_type=="bus") {
      object.number_seats=20;
    }
    else if (this.answers.vehicle_type=="truck" || this.answers.vehicle_type=="motorcycle") {
      object.number_seats=2;
    }
    else if (this.answers.vehicle_type=="car") {
      object.number_seats=5;
    }


    if (this.answers.parent=="Living with family or children") {
      object.parent=true;
    }
    else if (this.answers.parent=="Living alone") {
      object.parent=false;
    }

    if (this.answers.www=="yes") {
      object.www=true;
    }
    else if (this.answers.www=="no") {
      object.www=false;
    }

    const apiEndpoint = 'your-api-endpoint';
    const requestData = object;

    // Example using Angular HttpClient
    // import { HttpClient } from '@angular/common/http';
    // constructor(private http: HttpClient) {}
    // this.http.post(apiEndpoint, requestData).subscribe(response => console.log(response));
    console.log('Sending to API:', object);
  }
}

