import { Component } from '@angular/core';

@Component({
  selector: 'app-formparent',
  templateUrl: './formparent.component.html',
  styleUrls: ['./formparent.component.css']
})
export class FormparentComponent  {
  cars:string[] =[];
  carName ="";
  addcar() {
    this.cars.push(this.carName);
    this.carName=""; 
    console.log(this.cars);
  }

}

