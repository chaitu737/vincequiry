import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { StudentService } from 'src/app/Services/student.service';
import { Router } from '@angular/router';
import { RegistrationStep1Component } from '../registration-step1/registration-step1.component';




export function toFormData<T>(formValue:T){
  const fd = new FormData();
for(const key of Object.keys(formValue)){
  const value = formValue[key];

  fd.append(key, value);
}
return fd;

}

@Component({
  selector: 'app-registration-step3',
  templateUrl: './registration-step3.component.html',
  styleUrls: ['./registration-step3.component.css'],
  providers:[RegistrationStep1Component]
})
export class RegistrationStep3Component implements OnInit {
studentDetails: any = {};
message;
messageClass;
  constructor(
    private studentService: StudentService,
    private router: Router,
    private registrationComponent: RegistrationStep1Component
  ) { }
  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit() {

  }

  submit() {

    const student = {
      email:this.regForm.get('contactDetails').get('email').value,
      fullName: this.regForm.get('personalDetails').get('fullName').value, 
      fatherName: this.regForm.get('personalDetails').get('fatherName').value,
      motherName: this.regForm.get('personalDetails').get('motherName').value,
    file: this.studentService.selectedFile,
      mobilenumber: this.regForm.get('contactDetails').get('mobilenumber').value
      
      
    } 
    console.log(student);

    this.studentService.getDetails( toFormData(student)).subscribe(data =>{
      
           this.studentDetails = data;
            if (!this.studentDetails.success) {
              this.messageClass = 'alert alert-danger'; // Set an error class
              this.message = this.studentDetails.message; // Set an error message
              } else {
              this.messageClass = 'alert alert-success'; // Set a success class
               this.message = this.studentDetails.message; // Set a success message
              
              this.router.navigate(['/home']);
            }
         })
    console.log(student)
    
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;

  }

}
