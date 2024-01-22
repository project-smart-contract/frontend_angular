import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor() { }

  currentStep = 0;
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
    return questionnaire[this.currentStep];
  }

  getNextQuestions(): any[] {
    // TO-DO : Implement logic to determine the next set of questions based on answers
    return []; 
  }

  recordAnswer(field: number, answer: any): void {

    this.answers[field] = answer;
    console.log(this.answers);
  }

  sendToAPI(): void {

    const apiEndpoint = 'your-api-endpoint';
    const requestData = this.answers;

    // Example using Angular HttpClient
    // import { HttpClient } from '@angular/common/http';
    // constructor(private http: HttpClient) {}
    // this.http.post(apiEndpoint, requestData).subscribe(response => console.log(response));
    console.log('Sending to API:', this.answers);
  }
}

const questionnaire: any[] = [
  { id: 'q1', text: 'What is your occupation?', type: 'text' },
  { id: 'q2', text: 'When is your age?', type: 'number' },
  { id: 'q3', text: 'What is your vehicle type?', type: 'radio' , options: ['motorcycle', 'car', 'truck','bus','boat'],},
  { id: 'q4', text: 'What is your vehicle make?', type: 'text' },
  { id: 'q5', text: 'What is your vehicle model?', type: 'text' },
  { id: 'q6', text: 'What is your vehicle year?', type: 'number' },
  { id: 'q7', text: 'How many vehicles you want to ensure?', type: 'number' },
  { id: 'q8', text: 'How many seats you want to ensure?', type: 'number' },
  { id: 'q9', text: 'What is your business field?', type: 'text' },
  { id: 'q10', text: 'How would you describe your current living situation?', type: 'radio' },
  { id: 'q11', text: 'do you want to ensure a brand new vehicle or no?', type: 'radio' },
];

