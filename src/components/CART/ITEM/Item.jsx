import React from 'react'
import './item.css';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useGlobalCart } from '../../../context/cart-context';
import { useState } from 'react';
import { useEffect } from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


const Item = ({ cartIdQnt }) => {

    const [cartData, SetCartData] = useState();
    const [heartClassName, setHeartClassName] = useState('heart-before');

    const { deleteCart } = useGlobalCart();

    const getCartData = async (id) => {
        let res = await axios.get(`https://dummyjson.com/products/${id}`)
        SetCartData(res.data);
    }

    useEffect(() => {
        getCartData(cartIdQnt.id);
    }, [cartIdQnt])

    return (
        cartData
        &&
        <div className="item-body">
            <div className="checkbox">
                <input type="checkbox" name="" id="" />
            </div>
            <div className="item-img">
                <img src={cartData.images[0]} alt="" />
            </div>
            <div className="item-disc">
                <h3>{cartData.title}</h3>
                <p>
                    <Rating name="size-small" defaultValue={cartData.rating} size="small" readOnly
                        precision={0.5}
                    />
                </p>
                <p>&#8377;{cartData.price * 40}/-</p>
                <div className="qty-modify">
                    {/* <p>{cartIdQnt.qnt}</p> */}
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <span onClick={() => deleteCart(cartData.id)}>delete</span>
                    <span>
                        <FavoriteIcon className={`${heartClassName} 'heart'`} onClick={() => setHeartClassName(heartClassName == "heart-before" ? "heart-after" : "heart-before")} />
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Item;
