import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employees } from 'src/app/store/lateral-personal-details.model';
import { PersonalLateralService } from '../personal-lateral.service';


@Component({
  selector: 'app-lateral-personal-details',
  templateUrl: './lateral-personal-details.component.html',
  styleUrls: ['./lateral-personal-details.component.css']
})
export class LateralPersonalDetailsComponent {
  items:any;
  public EmployeesInfo: Employees = {} as Employees;
  constructor(private _http:PersonalLateralService){

  }

  ngOnInit(): void {
    this._http.fetchLatpersonalDetails().subscribe((res)=>{
        this.items=res;
        console.log("Data Save",this.items);
      })
  }

  saveLateralPersonal(LateralPersonaDetails:NgForm)

  {
    this._http.saveLatPersonalDetails(LateralPersonaDetails).subscribe((res)=>{
     console.log(res);
    })
    alert("data has been successfully.........");
    this.ngOnInit();
  }

}
