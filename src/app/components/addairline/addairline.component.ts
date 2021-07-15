import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airline } from 'src/app/Model/Airline';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {
submitted:boolean=false;
  eRegisterForm:FormGroup=new FormGroup({});

  public meals = ['non-veg', 'veg','none'];
  public scheduleddayss= ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
  public instrumentUseds=['normal','scientific'];
  
  public toPlaces=['Delhi','Mumbai'];
  public fromPlaces=['Bangalore','Goa'];
  public airlineModel = new Airline();
  onSubmit(){
      console.log(this.airlineModel);
  }

  constructor(private builder : FormBuilder, private router:Router) { }
  

  ngOnInit(): void {

  //   this.eRegisterForm = this.builder.group({
  //     // name: ['',Validators.required],
  //     // email: ['',Validators.email],
  //     // password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
  //     airlineName:['',Validators.required],
  //     uploadLogo:" ",
  //     flightNumber:0,
  //     fromPlace:" ",
  //     toPlace:" ",
  //     startdatetime:"10-10-2021",
  //     enddatetime:"15-10-2021",
  //     scheduleddays:" ",
  //     instrumentUsed:" ",
  //     tNoBusinessClassSeats:0,
  //     tNoNonBusinessClassSeats:0,
  //     ticketCost: 0,
  //     numberofRows:0,
  //     meal:" "

  //   })
  // }

  // get eRegisterFormControl(){
  //   return this.eRegisterForm.controls;
  // }
  // registerAirline(){
  //   this.submitted = true;
  //   console.log(this.eRegisterForm);
  //   if(this.eRegisterForm.valid){
  //     console.log('Form Submitted without errors...');
  //   }

  }
   
}
