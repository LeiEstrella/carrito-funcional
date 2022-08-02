const productos = [

    {
        "id": "semilla1",
        "titulo": "Semilla de chia",
        "descripcion": "Descripcion Semilla de chia",
        "img": "imagenes/chia.png",
        "precio": 100,
        "origen": "nacional",
        "cantidad": 6
    }, {
        "id": "semilla2",
        "titulo": "Semilla de Sesamo",
        "descripcion": "Descripcion Semilla de Sesamo",
        "img": "imagenes/sesamo.png",
        "precio": 200,
        "origen": "nacional",
        "cantidad": 7
    }, {
        "id": "semilla3",
        "titulo": "Semilla de girasol",
        "descripcion": "Descripcion Semilla de girasol",
        "img": "imagenes/girasol.png",
        "precio": 300,
        "origen": "nacional",
        "cantidad": 8
    }, {
        "id": "semilla4",
        "titulo": "Semilla de soja de Hong Kong",
        "descripcion": "Descripcion Semilla de soja",
        "img": "imagenes/girasol.png",
        "precio": 400,
        "origen": "importada",
        "cantidad": 9
    }
]

export default function getProducto() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
};