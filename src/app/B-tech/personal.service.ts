import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
apiURL=' http://localhost:3000/Personal-Detail';
  constructor(private http:HttpClient) { }

  savePersonalDeltails(data:any)
  {
    return this.http.post(this.apiURL,data);
  }

  getPersonalDetails()
  {
    return this.http.get(this.apiURL);
  }

  deletePersonalDetails(id:number)
{
  return this.http.delete(`${this.apiURL}/${id}`);
}
}
