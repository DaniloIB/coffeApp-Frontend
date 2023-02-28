
export class Product {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    existencia: number;
    valoracion: number;
    imagenUrl: string;
    idSubcategoria: number;

    constructor(nombre: string, descripcion: string, precio: number, existencia: number, valoracion: number, imagenUrl: string, idSubcategoria: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.existencia = existencia;
        this.valoracion = valoracion;
        this.imagenUrl = imagenUrl;
        this.idSubcategoria = idSubcategoria;
    }
}
