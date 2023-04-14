import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  items:any;
  public labelName="Add Personal Details";
  empDetails!: NgForm;
  public AddGetData:any;
  Name:any;
  totalLength:any;
  pages:number = 1;

  id:number | undefined;
  name="";
  Salary:number | undefined;
  headerName:any;
  constructor(private _http:PersonalService ) { }

  ngOnInit(): void {
    this._http.getPersonalDetails().subscribe((res)=>{
        this.items=res;
        console.log(this.items);
      })
  }

  savePersonal(data:any)
  {
    this.headerName="Add Personal Details";
     this._http.savePersonalDeltails(data).subscribe((res)=>{
      console.log(res);
      alert("data has been successfully.........");
      this.ngOnInit();
     // this.clearForm(data);
     })
  }

  deleteAddResto(id:any)
  {
  
   if(confirm("Do You Want To Delete Data"))
   {
   this._http.deletePersonalDetails(id).subscribe((result)=>{
     console.warn(result);
   //  alert("Do You Want To Delete Data");
     this.ngOnInit();
   })
  }
  }

  Search()
  {
    if(this.Name == "")
    {
      this.ngOnInit();
    }
    else
    {
      this.items=this.items.filter((res: { Name: string; })=>{
        return res.Name.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
      })
    }
  }
 

  editForm(data:any)
  {
   // this.showForm=true;
if(data)
{
this.headerName="Update Personal Details";
this.id=data.id;
this.name=data.Name;
this.Salary=data.Salary;
//alert(this.name);
this.savePersonal(data);
}
else{
  this.headerName="Add Personal Details";
}
  }

clearForm(data=null){
  if(data)
    {
    this.id=0;
    this.name='';
    this.Salary=0;
    }
  }
  


}
