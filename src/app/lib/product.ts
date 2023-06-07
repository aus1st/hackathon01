export interface IProduct  {
    _id: string,
    title: string,
    description: string,
    price: number,
    image: any,
    details:string,
    quantity?: number
}

export interface ICart {
    id: number
    //id?: string,
    product_id: string,
    quantity: number,
    price: number,
    size: string
}

