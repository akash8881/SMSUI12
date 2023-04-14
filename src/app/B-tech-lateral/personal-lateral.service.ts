import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalLateralService {
apiUrl="https://localhost:44301/api/Employees/GetAllEmployees";
postApi="https://localhost:44301/api/Employees/PostAllEmployees";
  constructor(private http:HttpClient) { }


saveLatPersonalDetails(data:any)
{
  return this.http.post(this.postApi,data);
}

  fetchLatpersonalDetails()
  {
    return this.http.get(this.apiUrl);
  }
}
