
import {client} from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import { IProduct } from './product';
import { title } from 'process';

const builder = imageUrlBuilder(client);

const urlFor = (source:any)=>{
  return builder.image(source);
}


export const getProductData = async ()=>{
    const res = await client.fetch(`*[_type=='product'][0..2]{
        _id,title,description,image,price
    }`);
    return res;
}

export const productData = async ()=>{
    const res: IProduct[] = await getProductData();
    return res;
}


export const getProductDataByGender = async (gender:string)=>{
    const res = await client.fetch(`*[_type=='product' && category->name ==$gender] {
        _id,title,description,image,price,details,category->{
            _id,
            name
        }
    }`,{gender: gender})
    return res;
}


export const getProductDataById = async (id:string)=>{
    const res = await client.fetch(`*[_type=='product' && _id == '${id}'] {
        _id,title,description,image,price,details
    }[0]`)

    return res;
}

export const getAllProducts = async ()=>{
    const res = await client.fetch(`*[_type=='product'] {
        _id,title,description,image,price,details
    }`)
    return res;
}
