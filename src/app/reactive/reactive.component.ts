import { Component } from '@angular/core';

import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
    contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    isMarried: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    address:new FormGroup({
      city: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required]),
    })
  })
  get city () {
    return this.contactForm.get('city')
   }
   get street () {
    return this.contactForm.get('street')
   }
   get pincode () {
    return this.contactForm.get('pincode')
   }
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
}