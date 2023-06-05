import { ICart } from "./product";

let cartItems: ICart[] = [];

export const getCartItems = () => {
    return cartItems;
}

export const addToCart = (items: ICart[]) => {
    console.log(items.length)
    items.map(c => {
        cartItems.push(c);
    })
};

export const updateCart = (item: string, qty: number) => {
    let newCartItems: ICart[] = [];
    console.log(qty);
    cartItems.map((obj) => {
        let newCartItem: ICart = { ...obj };

        if (obj.id == item) {
            newCartItem = {
                ...obj,
                quantity: qty
            }
        }
        newCartItems.push(newCartItem)
    })

    cartItems = newCartItems;
}

export const deleteCartItem = (id: string) => {
    cartItems = cartItems.filter((obj) => {
        obj.id !== id;
    })
}