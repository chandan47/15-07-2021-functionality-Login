import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { reqAirlineUrl } from '../constants';
import { Airline } from '../Model/Airline';

@Injectable({
  providedIn: 'root'
})
export class AirlinedetailsService {

  constructor(private http:HttpClient) { }

  airline:Airline[] = [];

  getAirlines(): Observable<any>{
    return this.http.get(reqAirlineUrl);
  }
  getAirlinesFromObservable(results:any):Airline[]{
    try {
    for (const u of results.data) {
        this.airline.push({
          flightNumber: u.id,
          airlineName: u.airlineName,
          uploadLogo: u.uploadLogo,
          fromPlace: u.fromPlace,
          toPlace:u.toPlace,
          startdatetime:u.startdatetime,
          enddatetime:u.enddatetime,
          scheduleddays:u.scheduleddays,
          instrumentUsed:u.instrumentUsed,
          tNoBusinessClassSeats:u.tNoBusinessClassSeats,
          tNoNonBusinessClassSeats:u.tNoNonBusinessClassSeats,
          ticketCost:u.ticketCost,
          numberofRows:u.numberofRows,
          meal:u.meal
        });
      }
    } catch (error) {
      console.error(error);
    }
    return this.airline;
  }
}
