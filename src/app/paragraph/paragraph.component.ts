import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {
  isHidden: boolean = true; 
  isHidden1: boolean =true; 
  isHidden2: boolean =true;
  
  toggleVisibility() {
    this.isHidden = !this.isHidden;
  }
  toggleVisibility1() {
    this.isHidden1 = !this.isHidden1;
  }
  toggleVisibility2() {
    this.isHidden2 = !this.isHidden2;
  }
}
