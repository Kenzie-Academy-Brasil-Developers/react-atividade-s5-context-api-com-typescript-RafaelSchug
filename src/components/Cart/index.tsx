import { useCart } from "../../providers/cart"

const Cart = () => {

    const {cart} = useCart();

    return (
        <div>
            {cart.map(item => {
                return (
                    <p>{item.title}</p>
                )
            })}
        </div>
    )
}

export default Cart;