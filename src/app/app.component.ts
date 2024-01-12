import { Component } from '@angular/core';
import { PaperService } from './paper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirst';

  public bread:any;
  constructor(private list:PaperService) {
  }
  ngonInit():void {
    this.bread = this.list.coffee();
  }
  
}
