import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeCRUDService } from '../customservices/employee-crud.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  _id=0;
  employee_pic:any;
  constructor(private activeRoute:ActivatedRoute, private empcrud:EmployeeCRUDService){
    const routeParam=this.activeRoute.snapshot.paramMap.get("_id")
    if(routeParam!=null)
      this._id=parseInt(routeParam);
  }
  getFile(ev:any){
    //console.log(ev.target.files[0]);
    this.employee_pic=ev.target.files[0];
  }
  upload(){
    if(this.employee_pic!=undefined)
      this.empcrud.uploadEmployeePicture(this._id,this.employee_pic)
  }
}
