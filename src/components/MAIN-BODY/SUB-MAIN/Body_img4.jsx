import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
import sliderImg3 from "../../../Image/winter.jpg";
import ima1 from '../../../Image/ima1.jpg';
import ima2 from '../../../Image/ima2.jpg';

export default function Body_img4() {
    return (
        <>






            {/* body content  */}


            <div className="body-main">

                {/* <div className="body-main-left">
                    <h2>Keep shoping for</h2>
                    <div className="IMAGES">
                        <div className="img1">
                            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71AToeJUPBL._AC_SY135_.jpg" alt="" />
                            <h5>HP VICTUS...</h5>
                        </div>
                        <div className="img2">
                            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91+6YECnK3L._AC_SY135_.jpg" alt="" />
                            <h5>HP 15 12th gen...</h5>
                        </div>
                        <div className="img3">
                            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81yZryzNh8L._AC_SY135_.jpg" alt="" />
                            <h5>Acer Nitro 5...</h5>
                        </div>
                        <div className="img4">
                            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61gGtqfZFlL._AC_SY135_.jpg" alt="" />
                            <h5>Acer Aspire 5...</h5>
                        </div>
                    </div>

                </div> */}
                <div class="body-main-middle">
                    <div className="body_img">
                        <Carousel autoPlay={true} infiniteLoop={true} interval='3000' emulateTouch={true}>
                            <div>
                                <img src={ima1} alt="" />
                            </div>
                            <div>
                                <img src="https://www.atozpictures.com/uploads/2016/12/kate-winslet-cute-face-stills.jpg" alt="" />
                            </div>
                            <div>
                                <img src={sliderImg3} alt="" />
                            </div>
                            <div>
                                <img src={ima2} alt="" />
                            </div>
                        </Carousel>

                    </div>

                </div>
                {/* <div className="body-main-right">
                    <h2>Pick up where you left off</h2>
                    <div className="IMAGES">
                        <div className="img5">
                            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81mrormrW9L._AC_SY110_.jpg" alt="" />
                            <h5>Ross 100% mulbe...</h5>
                        </div>
                        <div className="img6">
                            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51Os4FQMzpL._AC_SY110_.jpg" alt="" />
                            <h5>Morphy Richards...</h5>
                        </div>
                        <div className="img7">
                            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81v1tec7chL._AC_SY110_.jpg" alt="" />
                            <h5>Xam Idea Mathem...</h5>
                        </div>
                        <div className="img8">
                            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71GnbBJtPlL._AC_SY110_.jpg" alt="" />
                            <h5>Classmate plus...</h5>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}