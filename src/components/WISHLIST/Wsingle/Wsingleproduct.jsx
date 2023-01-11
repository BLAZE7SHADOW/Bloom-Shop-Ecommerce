import React from 'react';
import '../Wsingle/wsingleproduct.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';


const Wsingleproduct = () => {


    return (
        <>
            <div className="w-items">
                <div className="deleteimg">
                    <div className="w-delete">
                        <DeleteIcon />
                    </div>

                    <div className="ww-img">
                        <img src="https://rukminim1.flixcart.com/image/312/312/xif0q/support/s/f/w/na-usa-knee-sleeve-guard-stretchable-cap-for-joint-pain-relief-original-imagkgrqjdgxut4g.jpeg?q=70" alt="" />
                    </div>
                </div>


                <div className="w-detailpricerating">
                    <div className="w-disc-rating">
                        <div className="w-disc">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="w-rating">
                            <Rating name="size-small" defaultValue={2} size="small" />
                        </div>
                    </div>
                    <div className="w-priceoffer">
                        <p>&#8377;749/-</p>
                    </div>
                </div>

                <div className="w-stock-movetocart">
                    {/* <div className="stock">
                        <p>OUT OF STOCK</p>
                    </div> */}
                    <div className="add2cart">
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wsingleproduct
