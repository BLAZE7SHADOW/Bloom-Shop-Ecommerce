import React from 'react'
import { useGlobalCart } from '../../context/cart-context'
import './cart.css'
import Item from './ITEM/Item'
import Emptycart from './EMPTYCART/Emptycart'

const Cart = () => {

    const { cartId, setCartId } = useGlobalCart();

    return (

        cartId.length !== 0 ?
            <div className="cart">
                <div className="cart-body">
                    <div className="shopping-cart">
                        <div className="heading">
                            <h1>Shopping Cart</h1>
                            <p>You have X items in your cart</p>
                        </div>
                        <div className='total-items'>
                            <div className="items">
                                {
                                    cartId.map((value) => {
                                        return (
                                            <Item
                                                cartIdQnt={value}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="sub-total">
                                <div className="total">
                                    <div className="t-head">
                                        <h2>SUBTOTAL</h2>
                                    </div>
                                    <div className="price-disc">
                                        <div className="t-price">
                                            <p>price</p>
                                            <p>&#8377;6789.00</p>
                                        </div>
                                        <div className="t-discount">
                                            <p>discount</p>
                                            <p>&#8377;6789.00</p>
                                        </div>
                                    </div>
                                    <div className="t-totalprice">
                                        <p><b>Total</b></p>
                                        <p><b>&#8377;6789.00</b></p>
                                    </div>
                                </div>
                                <div className="t-proceedtopay">
                                    <button><b><p>PROCEED TO PAY</p></b></button>
                                </div>
                            </div>
                        </div>

                        <div className="cart-payment">

                        </div>


                        <div className="similar-products">
                        </div>
                    </div>

                </div>

            </div> : <Emptycart />

    )
}

export default Cart
