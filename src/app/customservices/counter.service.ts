import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter=0;
  constructor(){
    console.log("......in CounterService.....");
  }
  incrementCounter(){
    this.counter++;
   // console.log(this.counter);
  }
  getCounter(){
    return this.counter;
  }
  get scount(){
    return this.counter;
  }
}
