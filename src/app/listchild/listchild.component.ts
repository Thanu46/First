import { Component,Input,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-listchild',
  templateUrl: './listchild.component.html',
  styleUrls: ['./listchild.component.css']
})
export class ListchildComponent implements OnChanges{
  @Input('carsInput') cars:string[] =[];
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called',changes['this.cars']);
  }
}
