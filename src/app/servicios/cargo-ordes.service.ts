import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
const env = environment
@Injectable({
  providedIn: 'root'
})
export class CargoOrdesService {

  constructor(private _http: HttpClient) { }

  upcomming(){
    return this._http.get(`${environment.base_url}/orders/uppcoming`)
  }
  orders(){
    return this._http.get(`${environment.base_url}/orders`)
  }
}
