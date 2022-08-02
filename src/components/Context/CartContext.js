import { useState, useEffect, createContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    let [cart, setCart] = useState([])
    let [totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)


    useEffect(() => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        setTotalQuantity(totalQuantity)
    }, [cart])

    const addItem = (productToAdd) => {
        console.log("context addItem")
        console.log("agrega:  ", productToAdd)
        console.log("cart... " + cart.length )
        console.log( ...cart)
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
            console.log("cart " + JSON.stringify(cart))
        }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    // const getCartQuantity = () => {
    //     let totalQuantity = 0

    //     cart.forEach(prod => {
    //         totalQuantity += prod.quantity
    //     })

    //     return totalQuantity
    // }

    return (
        <CartContext.Provider value={{
            cart,
            totalQuantity,
            addItem,
            removeItem,
            isInCart,
            // getCartQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext