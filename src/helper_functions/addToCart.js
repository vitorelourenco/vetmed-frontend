

export default function addToCart(qtd,product,setQtd,cart,setCart){

    
    const productInCart =cart?.find(c=>c.id ===product.id);
    if(productInCart){
        productInCart.qtd+=qtd;
        productInCart.total = productInCart.qtd*product.price
        setCart(cart)
    }
    else if(qtd>0){
        cart ? 
        setCart([...cart,{
            id:product.id,
            name:product.name,
            description:product.description,
            img:product.img,
            price:product.price,
            qtd,
            total: qtd*product.price
        }])
        :
        setCart([{
            id:product.id,
            name:product.name,
            description:product.description,
            img:product.img,
            price:product.price,
            qtd,
            total: qtd*product.price

        }])
    }
    setQtd(0)
}