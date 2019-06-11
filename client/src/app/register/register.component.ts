import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { StudentService } from '../Services/student.service';


import { HttpClient, HttpHeaders } from '@angular/common/http';


export function toFormData<T>(formValue:T){
  const fd = new FormData();
for(const key of Object.keys(formValue)){
  const value = formValue[key];

  fd.append(key, value);
}
return fd;

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  messageClass;
  message;
  studentDetails: any={};
  url= "http://localhost:3000/authentication/register"

  selectedFile: File = null;

  


  

  

 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private http: HttpClient,
    
  ) { 
    this.createForm();
    }

  createForm(){
    this.form = this.formBuilder.group({
      email : ['', Validators.compose([
         Validators.required, Validators.email,
      ])],
      fullName:['', Validators.compose([
        Validators.required
      ])],
      fatherName:['', Validators.compose([
        Validators.required
      ])],
      motherName: ['',Validators.compose([
        Validators.required
      ])],
      mobilenumber: ['',Validators.compose([
        Validators.required
      ])],
      Gender: ['', Validators.compose([
        Validators.required
      ])],
      file:[null, Validators.required]

})

  }

  onSubmit(){
    const student = {
      email: this.form.get('email').value,
      fullName: this.form.get('fullName').value,
      motherName: this.form.get('motherName').value,
      fatherName: this.form.get('fatherName').value,
      mobilenumber: this.form.get('mobilenumber').value,
      file: this.selectedFile
}
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
  }


  onFileChange(event){
if (event.target.files && event.target.files.length) {
    const [selectedFile] = event.target.files;
     this.selectedFile = selectedFile;
    }

  
  

  }
  

  ngOnInit() {  }

  
  

}
