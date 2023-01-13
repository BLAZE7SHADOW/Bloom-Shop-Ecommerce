import React from 'react';
import Rating from '@mui/material/Rating';

const Aproduct = () => {
    return (
        <div className='a-product'>
            <div className='a-center'>
                <div className='a-img'>
                    <img src="https://m.media-amazon.com/images/I/91TW7S4VB-L._AC_UY327_FMwebp_QL65_.jpg" alt="Girl in a jacket" />
                </div>
                <div className='a-disc'>
                    <div className='a-tittle'>
                        <p>hp laptop victous</p>
                        <p>best lap for gaming uotill now</p>
                    </div>
                    <div className='a-rating'>
                        <Rating name="read-only" value={4} readOnly />
                    </div>
                    <div className='a-price'>
                        <p>&#8377;9876/-</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Aproduct
