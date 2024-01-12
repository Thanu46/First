import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
 
 title ='List of Fruits';
 fruits =['Apple','Banana','Orange','Mango', 'Strawberry'];

 num=0;

 show=true;

 firstName= 'Thana';
 lastName='Lakshmi';

head='Fullstack Developer';

name='Hello World';

count=0;
click () {
  this.count++;
}

       toDate = new Date();

message = 'Hi Hello';

cash = 500;
}
