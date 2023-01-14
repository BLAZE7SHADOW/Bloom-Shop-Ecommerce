import React from 'react'
import './searchitem.css'
import Rating from '@mui/material/Rating';

const SearchItem = () => {

    return (
        <div className='ip-body'>
            <div className='ip-img'>
                <div className='ip-image'>
                    <img src="https://m.media-amazon.com/images/I/71VB1UTcYkL._AC_UY327_FMwebp_QL65_.jpg" alt="Girl in a jacket" />
                </div>
                <div className='ip-option'>
                    <span>hi</span>
                </div>

            </div>
            <div className='ip-disc'>
                <div className='ip-title'>
                    <div className='ip-title-head'>
                        <p><b>Lenovo IdeaPad Slim 1 AMD Ryzen 3 3250U 15.6" (39.62cm) FHD Thin & Light Laptop</b></p>
                    </div>
                    <div className='ip-title-disc'>
                        <p><b>(8GB/512GB SSD/Windows 11/Office 2021/3months Game Pass/Cloud Grey/1.6Kg), 82R10049IN</b></p>
                    </div>
                </div>
                <div className='ip-rating'>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                </div>
                {/* <div className='ip-price-head'>
                    <span className='ip-price'>&#8377;{(data.price * 40 - (data.price * 40 * data.discountPercentage / 100
                    )).toFixed(0)}</span>
                    <span className='ip-discount'>&#8377;{data.price * 40}</span>
                    <span className='ip-discountedPer'>{(data.discountPercentage).toFixed(0)}% off</span>
                </div> */}
                <div className='ip-bankoffer'>
                    <p>Save extra with NO Cost EMI</p>
                </div>
                <div className='ip-Delivery'>
                    <p className='ip-date'>Get it by Tuesday, <b>January 17</b></p>
                    <p className='ip-free'>FREE Delivery by Amazon</p>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;
