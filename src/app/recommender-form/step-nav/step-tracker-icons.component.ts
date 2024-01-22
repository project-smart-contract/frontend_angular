import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-tracker-icons',
  standalone: true,
  templateUrl: './step-tracker-icons.component.html',
  styleUrls: ['./step-tracker-icons.component.scss'],
  imports:[CommonModule]
})
export class StepTrackerIconsComponent  {

  stepDetails: { step: number; description: string;}[] = [
    { step: 1, description: 'Your info' },
    { step: 2, description: "Vehicle's info" },
  ]
  activeStep$: number | undefined;

  constructor() { }


}
