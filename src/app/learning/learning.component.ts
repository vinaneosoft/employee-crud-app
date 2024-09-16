import { transition } from '@angular/animations';
import { leadingComment } from '@angular/compiler';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent implements OnInit, OnDestroy, OnChanges {
  companyName1="Neosoft";
  companyName2="Webwerks";
  companyName=this.companyName2;
  baseLocation="Dadar";
  checkStatus=false;
  inputType="password";
  static companyDirector="Mr John";
  slogan=""  //4. declare the variable to hold the data of child
  className=LearningComponent;
  companyOffices=['Parel, mumbai','Dadar, Mumbai', 'Rabale, mumbai', 'pune', 'noida', 'Indore']
  offices=[
    {
      location:'Dadar, Mumbai (Headquarters)',
      address:'The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028'
    },
    {
      location:'Parel, Mumbai',
      address:'Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013'
    },
    {
      location:'Rabale, Mumbai',
      address:'Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701'
    },
    {
      location:'Pune',
      address:'IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057'
    },
    {
      location:'Noida',
      address:'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301'
    }
  ]
  salaries=[7456.56789, 50000.3333,676767.56,7089898.88,56565656.5,78787878, 35677.444]

  styleObject:any={
    backgroundColor:'lightblue', 
    color:'red', 
    textDecoration:'underline',
    width:'100px'
  }
  styleClasses=['bg-info', 'text-success', 'border', 'border-3','border-dark']

  styleClassesObject={
    'bg-info':false,
    'text-success':true,
    'border':true,
    'border-3':true,
    'border-dark':true
  }
  
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
  changeStyle1(){
    this.styleObject.backgroundColor='green' // in angular any object is mutable
    this.styleObject.transform='scale(2)' // new key getting added in existing object
  }
  changeStyle2(){
    this.styleObject.backgroundColor='lightblue' // in angular any object is mutable
    this.styleObject.transform='scale(1)'
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("in ngOnChanges of learning. this is lifecycle method gets called everytime when input bindings change");
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log("in ngOnDestroy of learning. this is last lifecycle method");
    console.log("release the resources b4 component gets destroyed...");
    
  }
  ngOnInit(): void {
    console.log("in ngOnInit of learning. this is first lifecycle method");
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
  today=new Date();

  currencyCode='INR'
  currencyCodes=[
    {
      country:'india',
      code:'INR'
    },
    {
      country:'japan',
      code:'JPY'
    },
    {
      country:'america',
      code:'USD'
    },
    {
      country:'europe',
      code:'EUR'
    }
  ]
  birthDates=[new Date('5 July 2008'), new Date('4 July 2008'), new Date('12 July 2005')]
}
