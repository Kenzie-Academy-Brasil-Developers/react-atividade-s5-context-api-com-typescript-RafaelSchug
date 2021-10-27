import { products } from "./helper";
import ProductCard from "../ProductCard";
import MainContainer from "../MainContainer";

interface productsData {
    title: string;
    id: number;
    description: string;
    image: string;
    price: number;
}

const Products = () => {

    const productList = products as productsData[];

    return (
        <MainContainer title='Produtos'>
           {productList.map(({id, title, description, image, price}) => {
               return (
                  <ProductCard key={id} id={id} title={title} description={description} image={image} price={price}></ProductCard>
               )
           })}
        </MainContainer>
    )
}

export default Products;