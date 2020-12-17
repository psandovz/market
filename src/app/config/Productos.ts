import { Productos, Consolas, Accesorios, Juegos } from '../classes/productos.interfaces';

export const juego: Juegos[] = [
    {
        img: "assets/img/PES2020.png",
        nombre_juego: "Pro Evolution Soccer 2020",
        desarrollado: "Konami",
        genero: "Deporte, Futbol",
        clasificacion: "+14",
        precio: "S/. 99",
        plataforma: "PlayStation4"
    },
    {
        img: "assets/img/COD-INFINITE.png",
        nombre_juego: "Call Of Duty Infinite Warfare",
        desarrollado: "Activision",
        genero: "Acción, primera persona (FPS) (Bélico)",
        clasificacion: "+18",
        precio: "S/. 69",
        plataforma: "PlayStation4"
    },
    {
        img: "assets/img/SMM2.png",
        nombre_juego: "Super Mario Maker 2",
        desarrollado: "Nintendo",
        genero: "Aventura, plataforma, acción y humor",
        clasificacion: "+10",
        precio: "S/. 129",
        plataforma: "Nintendo Switch"
    },
    {
        img: "assets/img/LM3.png",
        nombre_juego: "Luigui Mansion 3",
        desarrollado: "Next Level Games y Nintendo",
        genero: "Aventura, plataforma, acción y humor",
        clasificacion: "+10",
        precio: "S/. 179",
        plataforma: "Nintendo Switch"
    },
    {
        img: "assets/img/JF.png",
        nombre_juego: "Jump Force",
        desarrollado: "Bandai Namco Entertainment",
        genero: "Lucha",
        clasificacion: "+12",
        precio: "S/. 129",
        plataforma: "X-Box One"
    },
    {
        img: "assets/img/UNS3.png",
        nombre_juego: "Naruto Shippuden: Ultimate Ninja Storm 3",
        desarrollado: "Bandai Namco Entertainment",
        genero: "Aventura, Acción, Lucha",
        clasificacion: "+14",
        precio: "S/. 149",
        plataforma: "X-Box One"
    }
]

export const accesorio: Accesorios[] = [
    {
        img: "assets/img/M-DS4.png",
        nombre_accesorio: "Mando Playstation 4 Dualshock 4",
        color: "Dorado",
        condicion: "Nuevo",
        precio: "S/. 129",
        plataforma: "PlayStation4"
    },
    {
        img: "assets/img/Audifonos.png",
        nombre_accesorio: "Audífonos Gamer K1B Mic - Camuflaje",
        color: "Camuflado",
        condicion: "Nuevo",
        precio: "S/. 128",
        plataforma: "PlayStation4, Xbox One"
    },
    {
        img: "assets/img/M-NS.png",
        nombre_accesorio: "Mando Nintendo Switch Hori Horipad Azul",
        color: "Azul",
        condicion: "Nuevo",
        precio: "S/. 99",
        plataforma: "Nintendo Switch"
    },
    {
        img: "assets/img/M-JNS.png",
        nombre_accesorio: "Mando Joy Con Bluetooth Juego Joystick",
        color: "Azul/Rojos",
        condicion: "Nuevo",
        precio: "S/. 129",
        plataforma: "Nintendo Switch"
    },
    {
        img: "assets/img/GC-XO.png",
        nombre_accesorio: "Gift Card Xbox Live $5",
        color: "Verde",
        condicion: "Nuevo",
        precio: "S/. 25",
        plataforma: "Xbox One"
    }
]

export const consola: Consolas[] = [

    {
        img: "assets/img/playstation-consola.png",
        nombre_consola: "PlayStation 4",
        procesador: "AMD 'Jaguar', 8 núcleos. GPU: 1,84 TFLOPS, AMD Radeon",
        memoria: "8 GB GDDR5",
        almacenamiento: "500GB, 1TB",
        precio: "S/. 1300",
        fabricante: "Sony Computer Entertainment"
    },
    {
        img: "assets/img/nintendo-consola.png",
        nombre_consola: "Nintendo Switch",
        procesador: "Procesador NVIDIA Tegra X1 personalizado",
        memoria: "4 GB de RAM",
        almacenamiento: "32GB",
        precio: "S/. 1100",
        fabricante: "Nintendo Platform Technology Development Nintendo"
    },
    {
        img: "assets/img/xbox-consola.png",
        nombre_consola: "Xbox One",
        procesador: "AMD Jaguar x86-64 a 1,75 GHz (8 núcleos)",
        memoria: "8 GB DDR3",
        almacenamiento: "500 GB",
        precio: "S/. 1000",
        fabricante: "Microsoft"
    }
]

export const producto: Productos [] = [{
    consola : [

        {
            img: "assets/img/playstation-consola.png",
            nombre_consola: "PlayStation 4",
            procesador: "AMD 'Jaguar', 8 núcleos. GPU: 1,84 TFLOPS, AMD Radeon",
            memoria: "8 GB GDDR5",
            almacenamiento: "500GB, 1TB",
            precio: "S/. 1300",
            fabricante: "Sony Computer Entertainment"
        },
        {
            img: "assets/img/nintendo-consola.png",
            nombre_consola: "Nintendo Switch",
            procesador: "Procesador NVIDIA Tegra X1 personalizado",
            memoria: "4 GB de RAM",
            almacenamiento: "32GB",
            precio: "S/. 1100",
            fabricante: "Nintendo Platform Technology Development Nintendo"
        },
        {
            img: "assets/img/xbox-consola.png",
            nombre_consola: "Xbox One",
            procesador: "AMD Jaguar x86-64 a 1,75 GHz (8 núcleos)",
            memoria: "8 GB DDR3",
            almacenamiento: "500 GB",
            precio: "S/. 1000",
            fabricante: "Microsoft"
        }
    ],
    accesorio: [
        {
            img: "assets/img/M-DS4.png",
            nombre_accesorio: "Mando Playstation 4 Dualshock 4",
            color: "Dorado",
            condicion: "Nuevo",
            precio: "S/. 129",
            plataforma: "PlayStation4"
        },
        {
            img: "assets/img/Audifonos.png",
            nombre_accesorio: "Audífonos Gamer K1B Mic - Camuflaje",
            color: "Camuflado",
            condicion: "Nuevo",
            precio: "S/. 128",
            plataforma: "PlayStation4, Xbox One"
        },
        {
            img: "assets/img/M-NS.png",
            nombre_accesorio: "Mando Nintendo Switch Hori Horipad Azul",
            color: "Azul",
            condicion: "Nuevo",
            precio: "S/. 99",
            plataforma: "Nintendo Switch"
        },
        {
            img: "assets/img/M-JNS.png",
            nombre_accesorio: "Mando Joy Con Bluetooth Juego Joystick",
            color: "Azul/Rojos",
            condicion: "Nuevo",
            precio: "S/. 129",
            plataforma: "Nintendo Switch"
        },
        {
            img: "assets/img/GC-XO.png",
            nombre_accesorio: "Gift Card Xbox Live $5",
            color: "Verde",
            condicion: "Nuevo",
            precio: "S/. 25",
            plataforma: "Xbox One"
        }
    ],
    juego: [
        {
            img: "assets/img/PES2020.png",
            nombre_juego: "Pro Evolution Soccer 2020",
            desarrollado: "Konami",
            genero: "Deporte, Futbol",
            clasificacion: "+14",
            precio: "S/. 99",
            plataforma: "PlayStation4"
        },
        {
            img: "assets/img/COD-INFINITE.png",
            nombre_juego: "Call Of Duty Infinite Warfare",
            desarrollado: "Activision",
            genero: "Acción, primera persona (FPS) (Bélico)",
            clasificacion: "+18",
            precio: "S/. 69",
            plataforma: "PlayStation4"
        },
        {
            img: "assets/img/SMM2.png",
            nombre_juego: "Super Mario Maker 2",
            desarrollado: "Nintendo",
            genero: "Aventura, plataforma, acción y humor",
            clasificacion: "+10",
            precio: "S/. 129",
            plataforma: "Nintendo Switch"
        },
        {
            img: "assets/img/LM3.png",
            nombre_juego: "Luigui Mansion 3",
            desarrollado: "Next Level Games y Nintendo",
            genero: "Aventura, plataforma, acción y humor",
            clasificacion: "+10",
            precio: "S/. 179",
            plataforma: "Nintendo Switch"
        },
        {
            img: "assets/img/JF.png",
            nombre_juego: "Jump Force",
            desarrollado: "Bandai Namco Entertainment",
            genero: "Lucha",
            clasificacion: "+12",
            precio: "S/. 129",
            plataforma: "X-Box One"
        },
        {
            img: "assets/img/UNS3.png",
            nombre_juego: "Naruto Shippuden: Ultimate Ninja Storm 3",
            desarrollado: "Bandai Namco Entertainment",
            genero: "Aventura, Acción, Lucha",
            clasificacion: "+14",
            precio: "S/. 149",
            plataforma: "X-Box One"
        }
    ]
}
]
