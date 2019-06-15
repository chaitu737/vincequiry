import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-registration-step1',
  templateUrl: './registration-step1.component.html',
  styleUrls: ['./registration-step1.component.css']
})
export class RegistrationStep1Component implements OnInit {
constructor(
  private studentService: StudentService
) { }

@Input() regForm: FormGroup



   onFileChange(event){
if (event.target.files && event.target.files.length) {
     const [selectedFile] = event.target.files;
      this.studentService.selectedFile = selectedFile;
     }
     console.log(this.studentService.selectedFile);
  
    }
  
  step1Submitted() {
    
    this.regForm.get('personalDetails').get('fullName').markAsTouched();
    this.regForm.get('personalDetails').get('fatherName').updateValueAndValidity();
    this.regForm.get('personalDetails').get('motherName').markAsTouched();
    this.regForm.get('personalDetails').get('motherName').updateValueAndValidity();
    this.regForm.get('personalDetails').get('file').markAsTouched();
    this.regForm.get('personalDetails').get('file').updateValueAndValidity();
    
  }

  ngOnInit(){

  }

  
   }
  
