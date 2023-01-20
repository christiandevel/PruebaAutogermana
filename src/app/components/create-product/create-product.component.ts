import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Guid } from 'guid-typescript';

@Component({
	selector: 'app-create-product',
	templateUrl: './create-product.component.html',
	styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

	productForm: FormGroup;

	constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _productoService: ProductService) {

		this.productForm = this.fb.group({
			nombre: ['', Validators.required],
			categoria: ['', Validators.required],
			precio_venta: ['', Validators.required],
			stock: ['', Validators.required],
			descripcion: ['', Validators.required],
			imagen: ['', Validators.required],
			estado: ['', Validators.required],
		})
	}

	agregarProducto() {
		console.log(this.productForm)

		const producto: Product = {
			nombre: this.productForm.get('nombre')?.value,
			idcategoria: this.productForm.get('categoria')?.value,
			precio_venta: this.productForm.get('precio_venta')?.value,
			stock: this.productForm.get('stock')?.value,
			descripcion: this.productForm.get('descripcion')?.value,
			imagen: this.productForm.get('imagen')?.value,
			estado: this.productForm.get('estado')?.value,
		}

		producto.idproducto = this.guidGenerator();
		console.log(producto)

		this._productoService.guardarProducto(producto).subscribe(data => {
			this.toastr.success('Agregado!', 'Producto agregado con Exito');
			this.router.navigate(["/"])

		}, error => {
			console.log(error)
		})
	}

	guidGenerator() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});

	}

}
