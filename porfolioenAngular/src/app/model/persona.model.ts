export class persona {
    id?:number; 
    // el signo indica que el dato no es necesario declarar
    nombre:string;
    apellido:string;
    img:string;

    constructor( nombre:string,apellido: string,img:string ) {
        
            this.nombre = nombre;
            this.apellido =apellido;
            this.img = img;
        }
}