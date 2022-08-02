const products = [
    { 
        id: '1', 
        name: 'girsaol', 
        price: 350, 
        category: 'semilla', 
        img:'C:\Users\Leila\Desktop\leila-react-app\public\imagenes\girasol.png', 
        stock: 20, 
        description:'excelente para el colesterol'
    },
    { id: '2', name: 'mostaza', price: 500, category: 'importada', img:'C:\Users\Leila\Desktop\leila-react-app\public\imagenes\mostaza.png'},
    { id: '3', name: 'quinoa', price: 450, category: 'nacional', img:'C:\Users\Leila\Desktop\leila-react-app\public\imagenes\quinoa.png', stock: 10, description:'rica en omega 3'}
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
} 