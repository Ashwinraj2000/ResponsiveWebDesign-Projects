import logo from './images/logo.png'
import { useState,useEffect,useContext } from 'react';
import Store from './Pages/store';
import { CartContext } from "./cartContext";
import { getProductData } from './ProductsList';

function Navbar()
{
    const cart= useContext(CartContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
      
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const totalQty = cart.items.reduce((qty, product) => {
        return qty +  product.quantity;
    }, 0);


    const totalCost=cart.getTotalCost();

    useEffect(() => {
        if (isMenuOpen) {
          document.body.classList.add('no-scroll'); // Disable scroll
        } else {
          document.body.classList.remove('no-scroll'); // Enable scroll
        }
    
        // Cleanup when component unmounts or menu state changes
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, [isMenuOpen]);


    return(
    <>
        <nav>
            {/* <img src={logo} alt="" className="logo" /> */}
            <h1>Amazon</h1>
            <button className="menu-btn" onClick={toggleMenu}>Cart (<span>{totalQty}</span>items)</button>
            {isMenuOpen && (
                <div className="full-screen-menu">
                    <div className="wrapper">
                        <div className="contain">
                            <button className="close-btn" onClick={toggleMenu}>
                                &times;
                            </button>
                            <h1>Shopping Cart</h1>
                        </div>
                        <div className="cartItems">
                            {/* Add shopping cart Items */}
                          { totalQty>0?
                            cart.items.map((product, ind) => {
                                const prodData = getProductData(product.id); // Move `const` here, outside the JSX return
                                return (
                                <div key={ind}>
                                    <img src={prodData.image} alt="" />
                                    <div className="cartDetails">
                                    <p>{prodData.name}</p>
                                    <p>Qty: {cart.getProductQty(prodData.id)}</p>
                                    <p className='costinfo'>$ {cart.getProductQty(prodData.id)*prodData.price}</p>
                                    <button onClick={()=>cart.deleteFromCart(prodData.id)}>Remove <i class="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </div>
                                );
                            })
                            :
                            <h1 style={{textAlign: 'center',marginTop:'100px', color:'#DA0037'}}>Cart is empty!</h1>
                        }  
                        <>
                            {totalQty>0 && 
                                <div className='totalprice'>
                                    <h3>Total cost</h3>
                                    <h3>$ {totalCost}</h3>
                                </div>  
                            }
                        </>                   
                        </div>
                    </div>
                </div>
            )}
        </nav>
    </>
    );
}

export default Navbar;