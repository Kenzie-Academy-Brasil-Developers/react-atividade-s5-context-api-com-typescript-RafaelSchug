import { useCart } from '../../providers/cart';
import {Container} from './style';


interface ProductProps{
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    isCart?: boolean;
    quantity?: number;
}


const ProductCard = ({id, title, description, image, price, quantity, isCart}: ProductProps) => {

    const {addProduct, deleteProduct} = useCart();

    return (
        <Container className='product__card'>
            <img src={image} alt="ilustration" />
            <h5 className='title'>{title}</h5>
            <details>
                <summary>Exibir Detalhes</summary>
                <p>{description}</p>
            </details>
            {quantity && <p>Quantidade: {quantity}</p>}
            <p className='price'>R$ {price}</p>
            {!isCart && <button className='add_product' onClick={() => addProduct({id, title, description, image, price})}>Adicionar</button>}
            {isCart && <button className='delete_product' onClick={() => deleteProduct(id)}>Remover</button>}

        </Container>
    )
}

export default ProductCard;