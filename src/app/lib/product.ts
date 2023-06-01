export interface IProduct  {
    _id: string,
    title: string,
    description: string,
    price: number,
    image: any,
    details:string
}

export interface ICart {
    id?: string,
    product_id: string,
    quantity: number,
    price: number,
    size: string
}

