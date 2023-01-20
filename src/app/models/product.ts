export class Product {
	idproducto?: string;
	idcategoria: string;
	nombre: string;
	precio_venta: string;
	stock: string;
	descripcion: string;
	imagen: string;
	estado: string;

	constructor(
		idcategoria: string,
		codigo: string,
		nombre: string,
		precio_venta: string,
		stock: string,
		descripcion: string,
		imagen: string,
		estado: string,
	) {
		this.idcategoria = idcategoria;
		this.nombre = nombre;
		this.precio_venta = precio_venta;
		this.stock = stock;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.estado = estado;
	}
}