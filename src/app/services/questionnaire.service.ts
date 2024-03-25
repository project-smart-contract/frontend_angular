import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// questionnaire.model.ts
export interface Question {
  id: string;
  text: string;
  type: 'text' | 'number' | 'radio';
  options?: string[]; 
}


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  private apiEndpoint = 'http://localhost:5000/get_recommendations';

  questionnaire: Question[] = [
    /* 0  */  { id: 'occupation', text: 'Quelle est votre profession ?', type: 'text' },
    /* 1  */  { id: 'age', text: 'Quel est votre âge ?', type: 'number' },
    /* 2  */  { id: 'vehicle_type', text: 'Quel est le type de votre véhicule ?', type: 'radio' , options: ['moto', 'voiture', 'camion', 'autobus', 'bateau']},
    /* 3  */  { id: 'vehicle_make', text: 'Quelle est la marque de votre véhicule ?', type: 'text' },
    /* 4  */  { id: 'vehicle_model', text: 'Quel est le modèle de votre véhicule ?', type: 'text' },
    /* 5  */  { id: 'vehicle_year', text: 'Quelle est l\'année de votre véhicule ?', type: 'number' },
    /* 6  */  { id: 'number_insured_vehicles', text: 'Combien de véhicules souhaitez-vous assurer ?', type: 'number' },
    /* 7  */  { id: 'number_seats', text: 'Combien de sièges souhaitez-vous assurer ?', type: 'number' },
    /* 8  */  { id: 'business_field', text: 'Quel est votre secteur d\'activité ?', type: 'text' },
    /* 9  */  { id: 'parent', text: 'Comment décririez-vous votre situation actuelle ?', type: 'radio',options: ['Vivre avec la famille ou des enfants', 'Vivre seul(e)'] },
    /* 10 */  { id: 'www', text: 'Souhaitez-vous assurer un véhicule neuf ou non ?', type: 'radio',options: ['oui', 'non'] },
  ];
  
    
  constructor(private http: HttpClient) { }

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
  getRecommendation():Observable<any> {
    this.answers.age=20;
    this.answers.fullname="Aya test";

    // constructing the object i want to send 
    const object = { 
      fullname: "Aya test",
      age: 20,
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
      timestamp: new Date().toISOString(),
    };

    if (this.answers.vehicle_type=="moto") {
      object.vehicle_type="motorcycle";
    }
    if (this.answers.vehicle_type=="voiture") {
      object.vehicle_type="car";
    }
    if (this.answers.vehicle_type=="camion") {
      object.vehicle_type="truck";
    }
    if (this.answers.vehicle_type=="autobus") {
      object.vehicle_type="bus";
    }
    if (this.answers.vehicle_type=="bateau") {
      object.vehicle_type="boat";
    }


    if (this.answers.vehicle_type=="autobus") {
      object.number_seats=20;
    }
    else if (this.answers.vehicle_type=="camion" || this.answers.vehicle_type=="moto") {
      object.number_seats=2;
    }
    else if (this.answers.vehicle_type=="voiture") {
      object.number_seats=5;
    }


    if (this.answers.parent=="Vivre avec la famille ou des enfants") {
      object.parent=true;
    }
    else if (this.answers.parent=="Vivre seul(e)") {
      object.parent=false;
    }


    if (this.answers.www=="oui") {
      object.www=true;
    }
    else if (this.answers.www=="non") {
      object.www=false;
    }

    console.log('Sending to API:', object);

    return this.http.post<string>("http://127.0.0.1:5000/get_recommendations", object);
    
  } 
}

