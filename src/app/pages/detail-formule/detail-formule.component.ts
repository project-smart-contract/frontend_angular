import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as detailsData from '../../data/detailFormule.json';
import * as optionsData from '../../data/option.json';

@Component({
  selector: 'app-detail-formule',
  standalone: true,
  imports: [],
  templateUrl: './detail-formule.component.html',
  styleUrl: './detail-formule.component.scss'
})
// export class DetailFormuleComponent implements OnInit {
//   formuleId: number | undefined;
//   formuleDetails: any; // Remplace avec le type correct
//   optionsDetails: any[] = []; // Remplace avec le type correct

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       this.formuleId = Number(params.get('id'));
//       this.loadFormuleDetails();
//       this.loadOptionsDetails();
//     });
//   }

//   loadFormuleDetails(): void {
//     const detailsFormules: any[] = detailsData.detailsFormule; // Remplace avec le type correct
//     this.formuleDetails = detailsFormules.find(details => details.idFormule === this.formuleId);
//   }

//   loadOptionsDetails(): void {
//     const optionsFormule: any[] = optionsData.option; // Remplace avec le type correct
//     this.formuleDetails.options.forEach((optionId: any) => {
//       const optionDetails = optionsFormule.find(option => option.id === optionId);
//       if (optionDetails) {
//         this.optionsDetails.push(optionDetails);
//       }
//     });
//   }
//   setupOptionCheckboxes(): void {
//     const optionCheckboxes = document.querySelectorAll(".option-checkbox");

//     optionCheckboxes.forEach((checkbox) => {
//       checkbox.addEventListener("change", () => {
//         const optionIndex = checkbox.getAttribute("data-option-index");
//         const optionDescription = document.querySelector(`.option-description[data-option-index="${optionIndex}"]`);

//         if (checkbox.checked) {
//           optionDescription.style.display = "block";
//         } else {
//           optionDescription.style.display = "none";
//         }
//       });
//     });
//   }
  
// }
export class DetailFormuleComponent implements OnInit, AfterViewInit {
  formuleId: number | undefined;
  formuleDetails: any;
  optionsDetails: any[] = [];

  constructor(private route: ActivatedRoute, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.formuleId = Number(params.get('id'));
      this.loadFormuleDetails();
      this.loadOptionsDetails();
    });
  }

  ngAfterViewInit(): void {
    this.setupOptionCheckboxes();
  }

  loadFormuleDetails(): void {
    const detailsFormules: any[] = detailsData.detailsFormule;
    this.formuleDetails = detailsFormules.find(details => details.idFormule === this.formuleId);
  }

  loadOptionsDetails(): void {
    const optionsFormule: any[] = optionsData.option;
    this.formuleDetails.options.forEach((optionId: any) => {
      const optionDetails = optionsFormule.find(option => option.id === optionId);
      if (optionDetails) {
        this.optionsDetails.push(optionDetails);
      }
    });
  }

  setupOptionCheckboxes(): void {
    const optionCheckboxes = this.el.nativeElement.querySelectorAll(".option-checkbox");

    optionCheckboxes.forEach((checkbox: HTMLInputElement) => {
        this.renderer.listen(checkbox, 'change', () => {
            console.log("Checkbox changed");
            const optionIndex = checkbox.getAttribute("data-option-index");
            const optionDescription = this.el.nativeElement.querySelector(`.option-description[data-option-index="${optionIndex}"]`);

            if (optionDescription) {
                if (checkbox.checked) {
                    this.renderer.setStyle(optionDescription, 'display', 'block');
                } else {
                    this.renderer.setStyle(optionDescription, 'display', 'none');
                }
            }
        });
    });
}

}