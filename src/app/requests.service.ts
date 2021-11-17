import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private server = "http://localhost:54491";

  constructor(private http: HttpClient) { }

  /** POST: add a new offering A to the database */
  // addOfferingA(fieldA: string, fieldB: string, fieldC: string): Observable<void> {
    
  // }

  /** POST: add a new offering B to the database */
  // addOfferingA(fieldA: string, fieldB: string, fieldC: string, fieldC: string): Observable<void> {
    
  // }

  /** POST: add a new user to the database */
  // addOfferingA(offeringId: string, name: string, surname: string, address: string): Observable<void> {
    
  // }
}
