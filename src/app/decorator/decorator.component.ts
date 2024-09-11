import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.css'
})
export class DecoratorComponent implements OnInit{

  slogan="We are not different. We lead by creating a difference" // 1. data
  /* when we pass data from child to parent, 
    child has to emit the event and has to share a data via event */
  @Output()
  emitter=new EventEmitter<string>();  //2. EventEmitter

  ngOnInit(): void {
    console.log("in Deco.. ngOnInit..");
    /* do not emit the event from constructor instead use lifecycle method */
    this.emitter.emit(this.slogan); //3. emit the event and pass the data
    /* on every update at child side,
     we have to emit the event to give to updates to parent */
     
   /*  setTimeout(()=>{
      this.slogan="slogan changed....";
    },2000)
    console.log("again emit....");
    setTimeout(()=>{
      this.emitter.emit(this.slogan);
    },3000)
    */
  }
}
