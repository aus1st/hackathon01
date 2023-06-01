import React from "react";
import { IProduct } from "../lib/product";
import { getProductDataByGender } from "../lib/productservice";
import ProductImage from "../components/ProductImage";
import Wrapper from "../components/Shared/Wrapper";
import Link from "next/link";

const page = async () => {
  const data: IProduct[] = await getProductDataByGender("Female");

  return (
    <Wrapper>
      {/* <div className="flex sm:flex-row flex-col gap-x-3 flex-wrap"> */}
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:justify-center gap-x-3 justify-center gap-y-3">
        {data.map((p) => (
          <Link href={`/Female/${p._id}`} key={p._id}>
            <ProductImage product={p}></ProductImage>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default page;
