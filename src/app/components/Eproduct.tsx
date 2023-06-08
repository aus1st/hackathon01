import { getProductData } from "../lib/productservice";
import { IProduct } from "../lib/product";
import Wrapper from "./Shared/Wrapper";
import SwipeProducts from "./widgets/SwipeProducts";


const Eproduct = async () => {
  const products: IProduct[] = await getProductData();
  return (
    <Wrapper>
      <SwipeProducts products={products}/>  
    </Wrapper>
    )
};

export default Eproduct;
