import { useCart } from "../../providers/cart"
import ProductCard from "../ProductCard";
import MainContainer from "../MainContainer";

const Cart = () => {

    const {cart} = useCart();

    return (
        <MainContainer title='Carrinho'>
            {cart.map(({id, title, description, image, price, quantity}) => {
               return (
                  <ProductCard key={id} id={id} title={title} description={description} image={image} price={price} quantity={quantity} isCart></ProductCard>
               )
           })}
        </MainContainer>
    )
}

export default Cart;