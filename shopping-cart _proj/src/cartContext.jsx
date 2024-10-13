import { createContext,useState } from "react";
import { productsArray,getProductData } from "./ProductsList";

const CartContext= createContext(
    {
        items:[],
        getProductQty:()=>{},
        addOneToCart:()=>{},
        removeOneFromCart:()=>{},
        deleteFromCart:()=>{},
        getTotalCost:()=>{}
    }
);


function CartProvider({children}){
    const[cartProducts,setCartProducts]=useState([]);
    
    const contextValue=
        {
            items:cartProducts,
            getProductQty,
            addOneToCart,
            removeOneFromCart,
            deleteFromCart,
            getTotalCost
        }
    
        function getProductQty(id){
            const qty=cartProducts.find(product => product.id===id)?.quantity
            if(qty===undefined)
                return 0;
            
            return qty;
        }

        function addOneToCart(id)
        {
            const prodQty=getProductQty(id);
            if(prodQty===0)
                {
                    setCartProducts([...cartProducts,{
                                                      id: id,
                                                      quantity: 1
                                                    }
                                    ])
                }else{
                    setCartProducts(cartProducts =>cartProducts.map(product=>product.id==id?{...product,quantity:product.quantity+1}:product))
                }
        }

        function deleteFromCart(id)
        {
            setCartProducts(cartProducts.filter(product=> product.id !== id))
        }

        function removeOneFromCart(id)
        {
            const prodQty=getProductQty(id);
            if(prodQty==1)
            {
                deleteFromCart(id);
            }
            else{
                setCartProducts(cartProducts => cartProducts.map(product=>product.id==id?{...product,quantity:product.quantity-1}:product));
            }
        }

        function getTotalCost(){
            const totalCost = cartProducts.reduce((cost, product) => {
                const productData = getProductData(product.id);
                return cost + (productData.price * product.quantity);
            }, 0);

            return totalCost;
        }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider,CartContext};