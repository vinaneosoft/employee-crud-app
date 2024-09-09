import { leadingComment } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  companyName1="Neosoft";
  companyName2="Webwerks";
  companyName=this.companyName2;
  baseLocation="Dadar";
  checkStatus=false;
  inputType="password";
  static companyDirector="Mr John";
  className=LearningComponent;
 
  constructor(){
    console.log("in learning constrcutor");
    setInterval(()=>{
      this.companyName=this.companyName1 // company
      this.companyName1=this.companyName2;
      this.companyName2=this.companyName; // we are changing model
    }, 1000);

    setTimeout(()=>{
      LearningComponent.companyDirector="Mr Herry"
    }, 2000)
  }
  display(){
    console.log(this.baseLocation);
    console.log(this.checkStatus);
    if(this.checkStatus)
      this.inputType="text"
    else
      this.inputType="password"
  }

  bindingImage={
    url:"https://www.tutorialsstar.com/wp-content/uploads/2021/05/1-Copy-768x406.png",
    height:300,
    width:700,
    name:"Data binding"
  }

  access(template:any){
    console.log(template);
    console.log(template.children); // js dom property
    console.log(template.innerText); // js dom property
   /*  let ele=document.createElement("p");
    ele.innerText="hi"
    template.append(ele) */
  }
  setCode(node:any){
    console.log(node.value);
  }
}
