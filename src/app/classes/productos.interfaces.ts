
export interface Productos{
    consola: Consolas[];
    accesorio: Accesorios[];
    juego: Juegos[];
}


export interface Consolas {
    img: string;
    nombre_consola: string;
    procesador: string;
    memoria: string;
    almacenamiento: string;
    precio: string;
    fabricante: string;
}

export interface Accesorios{
    img: string;
    nombre_accesorio: string;
    color: string;
    condicion: string;
    precio: string;
    plataforma: string;
}

export interface Juegos{
    img: string;
    nombre_juego: string;
    desarrollado: string;
    genero: string;
    clasificacion: string;
    precio: string;
    plataforma: string;
}
