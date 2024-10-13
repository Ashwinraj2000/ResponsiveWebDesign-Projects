import { productsArray,getProductData } from "../ProductsList";
import { CartContext } from "../cartContext";
import { useContext } from "react";

function Store()
{
    const cart= useContext(CartContext);

    return(
        <>
           <div className="prod-container">
                <h2>Electronic Gadgets</h2>
                <div className="grid-container">
                    {productsArray.map((prod,ind) =>(
                        <div key={ind}>
                            <h5>{prod.name}</h5>
                            <img src={prod.image} alt="" />
                            <h5 className="prod-cost">${prod.price}</h5>
                            {
                              cart.getProductQty(prod.id)>0 ?
                              <span>
                                    <button className="reduceItem" onClick={()=>cart.removeOneFromCart(prod.id)}>-</button>
                                    <span className="itemQty">{ cart.getProductQty(prod.id)}</span>
                                    <button className="addItem" onClick={()=>cart.addOneToCart(prod.id)}>+</button>     
                              </span>  
                              :
                              <button onClick={() =>cart.addOneToCart(prod.id)}>Add to cart</button>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Store;