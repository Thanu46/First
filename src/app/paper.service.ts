import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor() {}
    coffee() {
    return [{'name':'Thana','age':23}];
  }

}
  
