import React, { useState } from 'react';
import '../Wsingle/wsingleproduct.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import axios from 'axios';


const Wsingleproduct = ({ Wid }) => {

    const [wProduct, setWproduct] = useState([]);


    const getWishListData = async (Wid) => {
        let resp = await axios.get(`https://dummyjson.com/products/${Wid}`)
        setWproduct(Wid);
    }
    return (
        <>
            <div className="w-items">
                <div className="deleteimg">
                    <div className="w-delete">
                        <DeleteIcon />
                    </div>

                    <div className="ww-img">
                        <img src={wProduct.thumbnail} alt="" />
                    </div>
                </div>


                <div className="w-detailpricerating">
                    <div className="w-disc-rating">
                        <div className="w-disc">
                            <p>{wProduct.title}</p>
                        </div>
                        <div className="w-rating">
                            <Rating name="size-small" Value={wProduct.rating} size="small" />
                        </div>
                    </div>
                    <div className="w-priceoffer">
                        <p>&#8377;{wProduct.price}/-</p>
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
