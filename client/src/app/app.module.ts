import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule, FormsModule  } from "@angular/forms";
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import { RegistrationStep2Component } from './Components/registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './Components/registration-step3/registration-step3.component';
import { RegistrationStep4Component } from './Components/registration-step4/registration-step4.component';
import { RegistrationStep1Component  } from './Components/registration-step1/registration-step1.component';
import { CarouselModule} from 'ngx-owl-carousel-o';
import { StudentService } from './Services/student.service';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    RegistrationStep1Component,
    RegistrationStep2Component,
    RegistrationStep3Component,
    RegistrationStep4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
    MatStepperModule,
    MatDialogModule,
     CarouselModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
