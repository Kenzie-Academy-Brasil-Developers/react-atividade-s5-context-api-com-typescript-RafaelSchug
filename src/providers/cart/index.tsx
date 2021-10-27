import { createContext, useContext, useState, ReactNode } from "react";

interface CartProps{
    children: ReactNode;
}

interface Product{
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    quantity?: number;
}

interface CartProviderData{
    cart: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (productId: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

const CartProvider = ({children}: CartProps) => {

    const [cart, setCart] = useState<Product[]>([]);

    const addProduct = (product:Product) => {
        const productId = product.id;
        const isProductIncluded = cart.some(item => item.id === productId);
        if(!isProductIncluded){
            setCart([...cart, {...product, quantity: 1}])
        } else {
            const newCart = cart.map(item => item.id === productId ? {...item, quantity: Number(item.quantity) + 1} : item);
            setCart(newCart);
        }

    }

    const deleteProduct = (productId:number) => {
        const newCart = cart.map(item => {
            if(item.id === productId){
                return {...item, quantity: Number(item.quantity) - 1}
            } else {
                return item;
            }
        }).filter(item => Number(item.quantity) > 0);

        setCart(newCart);
        
    }

    return <CartContext.Provider value={{addProduct, deleteProduct, cart}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

export default CartProvider;