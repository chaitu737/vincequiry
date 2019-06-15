import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
@Component({
  selector: 'app-registration-step4',
  templateUrl: './registration-step4.component.html',
  styleUrls: ['./registration-step4.component.css']
})
export class RegistrationStep4Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup

  ngOnInit() {
  }

  step4Submitted() {
    this.regForm.get('EducationalDetails').get('SSC').markAsTouched();
    this.regForm.get('EducationalDetails').get('SSC').updateValueAndValidity();
    this.regForm.get('EducationalDetails').get('Inter').markAsTouched();
    this.regForm.get('EducationalDetails').get('Inter').updateValueAndValidity();
    this.regForm.get('EducationalDetails').get('Degree').markAsTouched();
    this.regForm.get('EducationalDetails').get('Degree').updateValueAndValidity();

  }
}
