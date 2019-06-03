import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { StudentService } from '../Services/student.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  url= "http://localhost:3000/authentication/upload"

  selectedFile: File = null;
  fd = new FormData();
  imageUploaded: any;

  

  

 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private http: HttpClient
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
      ])]



    })

  }

  onSubmit(){
    const student = {
      email: this.form.get('email').value,
      fullName: this.form.get('fullName').value,
      motherName: this.form.get('motherName').value,
      fatherName: this.form.get('fatherName').value,
      mobilenumber: this.form.get('mobilenumber').value,
        

    }
    



    

 
    
    this.studentService.getDetails(student).subscribe(data =>{
      console.log(data)
    
      
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


  createFormData(event){
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
  }

  
  upload(){
    this.http.post(this.url, this.fd)
    .subscribe( result => {
      console.log(result)
    });
  }


  

  ngOnInit() {
  }

}
