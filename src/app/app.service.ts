import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { URL_CONFIG } from "./app.config";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getQuestionByDay(payload) {
    return this.http
      .post<any>(
        URL_CONFIG.BASE_URL + URL_CONFIG.GET_QUESTIONS_BY_DAY,
        JSON.stringify(payload),
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError<any>("getQuestionByDay"))
      );
  }

  createNewTracker(payload) {
    return this.http
      .post<any>(
        URL_CONFIG.BASE_URL + URL_CONFIG.CREATE_NEW_TRACKER,
        JSON.stringify(payload),
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError<any>("createNewTracker"))
      );
  }

  getUserHealthTracker(payload) {
    return this.http
      .post<any>(
        URL_CONFIG.BASE_URL + URL_CONFIG.GET_HEALTH_TRACKER,
        JSON.stringify(payload),
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError<any>("createNewTracker"))
      );
  }
  
  saveDataForDay(payload) {
    return this.http
      .post<any>(
        URL_CONFIG.BASE_URL + URL_CONFIG.SAVE_DATA_FOR_DAY,
        JSON.stringify(payload),
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError<any>("createNewTracker"))
      );
  }

  registerUser(payload) {
    return this.http
      .post<any>(
        URL_CONFIG.BASE_URL + URL_CONFIG.SIGNUP,
        JSON.stringify(payload),
        httpOptions
      )
      .pipe(
        map(this.extractData),
        catchError(this.handleError<any>("createNewTracker"))
      );
  }
  
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}