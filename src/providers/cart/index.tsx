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
        setCart([...cart, product]);
    }

    const deleteProduct = (productId:number) => {
        const newCart = cart.filter(item => item.id !== productId);
        setCart(newCart);
    }

    return <CartContext.Provider value={{addProduct, deleteProduct, cart}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

export default CartProvider;