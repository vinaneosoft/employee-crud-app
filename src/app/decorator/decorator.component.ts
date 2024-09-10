import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.css'
})
export class DecoratorComponent {

  slogan="We are not different. We lead by creating a difference"
  /** when we pass data from child to parent, 
   * child has to emit the event and has to share a data via event */
  @Output()
  emitter=new EventEmitter<string>();

  pass(){
    this.emitter.emit(this.slogan);
  }
}
