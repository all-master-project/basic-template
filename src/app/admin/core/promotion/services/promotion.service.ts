import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Promotion } from "../models/promotion.model";

@Injectable({
  providedIn: "root",
})
export class PromotionService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJCcmFoaW0iLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiZXhwIjoxNjQ0ODYxMDk0fQ.cdAkbXgzTyqxtPzhNa4Q2Y03377sAoONL8hwTZ9VIJxqTl2aji98dXpKJDg9wLBtadw7EoeFoR4xcSNv9d2f0w' })
  };
  promotions: Array<Promotion> = [];
  // dataSource: MatTableDataSource<Promotion> =
  //   new MatTableDataSource<Promotion>();
  API=environment.url ;
  PROMOTION_API = environment.url + "/promotions";
  constructor(
    private httpClient: HttpClient, 
    // private paramsService: ParamsService,
    // private toastr: ToastrService
  ) {}

  getAllPromotions() {
    return this.httpClient
      .get<Promotion>(this.PROMOTION_API + "/findAll", this.httpOptions)
      .subscribe((res: any) => {
        this.promotions = res as Promotion[];
        // this.dataSource.data = res as Promotion[];
        console.log("promotions: ", this.promotions);
        // console.log("dataSource: ", this.dataSource);
      });
  }
  deletePromotion(id:number) {
    return this.httpClient.delete(this.PROMOTION_API + "/deleteById?id=" + id);
  }
  addPromotion(formData:any) {
    // return this.http.post("", professeur);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    console.log("Form Value: " + JSON.stringify(formData));
    return this.httpClient
      .post<Promotion>(
        this.API + "/promotions/save",
        formData,
        httpOptions
      )
      .subscribe((data:any)=>{
        console.log("data:[ "+" ]");
        
        return data;
      });
      // map<Response>((data:Response) => {
      //   console.log("DATA: " + JSON.stringify(data));
      //   return data;
      // });
  }

  deleteProfessseur(id: number) {
    return this.httpClient.delete(
      this.API + "/promotions/delete?id=" + id
    );
  }

  updatePromotion(formData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    console.log("Form Value: " + JSON.stringify(formData));
    return this.httpClient.put(
      this.API + "/promotions/update",
      formData,
      httpOptions
    );
  }

  handleErprror(err:any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage); 
  }
}
