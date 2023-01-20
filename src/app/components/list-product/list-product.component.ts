import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
	
	listProductos: Product[] = [];
	
	ngOnInit(): void {
		this.obtenerCategiories()
	}

	constructor(private _categoryService: ProductService){
		
	}
	
	
	obtenerCategiories(){
		this._categoryService.getCategories().subscribe( data => {
			console.log(data)
			this.listProductos = data
		}, error => {
			console.log(error)
		})
	}
	
	eliminarProducto(id: any){
		console.log("Elimiando el producto")
		console.log(id)
		this._categoryService.eliminarProducto(id).subscribe(data => {
			console.log(data)
		}, error => {
			console.log(error)
		})
	}
}


