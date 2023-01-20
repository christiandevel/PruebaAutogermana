import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
	
	URL = "http://localhost:5096/api/Product/"

  constructor(private http: HttpClient) { 
	}
	
	getCategories() : Observable<any> {
		return this.http.get(this.URL)
	}
	
	guardarProducto(data: Product) : Observable<any> {
		return this.http.post(this.URL, data)
	}
	
	eliminarProducto(id: string): Observable<any> {
		return this.http.delete(this.URL + id)
	}
}
