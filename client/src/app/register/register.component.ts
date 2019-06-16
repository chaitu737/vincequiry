import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,  FormGroup } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
   constructor() { 
   
    }

   


  ngOnInit() { 

    this.registrationForm = new FormGroup({
      'personalDetails': new FormGroup({
        'fullName': new FormControl(null, Validators.required),
        'fatherName': new FormControl(null,Validators.required),
        'motherName': new FormControl(null, Validators.required),
        "file": new FormControl(null, Validators.required)
      }),
      'contactDetails': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'mobilenumber': new FormControl(null,Validators.required)
      }),
      'EducationalDetails': new FormGroup({
        "SSC": new FormControl(null, Validators.required),
        "Inter": new FormControl(null,Validators.required),
        "Degree": new FormControl(null, Validators.required),
        "PG": new FormControl(null)
      })
    });

 

  
  

}
}