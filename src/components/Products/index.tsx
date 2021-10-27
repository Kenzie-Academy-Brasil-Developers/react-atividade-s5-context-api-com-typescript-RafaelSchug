import { products } from "./helper";
import { useCart } from "../../providers/cart";
import './style.css';

interface productsData {
    title: string;
    id: number;
    description: string;
    image: string;
    price: number;
}

const Products = () => {

    const productList = products as productsData[];
    const {addProduct} = useCart();

    return (
        <div className='products__container'>
           {productList.map(({id, title, description, image, price}) => {
               return (
                   <div key={id} className='product__card'>
                       <img src={image} alt="ilustration" />
                       <h4>{title}</h4>
                       <details>
                           <summary>Exibir Detalhes</summary>
                           <p>{description}</p>
                       </details>
                       <p>{price}</p>
                       <button onClick={() => addProduct({id, title, description, image, price})}>Adicionar</button>
                   </div>
               )
           })}
        </div>
    )
}

export default Products;