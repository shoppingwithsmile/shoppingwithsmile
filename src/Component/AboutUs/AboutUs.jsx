import React from 'react'
import "../AboutUs/AboutUs.scss"

// ===== IMAGE =====

import shopping from "../../Asset/Img/AboutUs/Shopping_destination.jpg"
import who_We from "../../Asset/Img/AboutUs/who_We.jpg"
import trusted_supplier from "../../Asset/Img/AboutUs/trusted_supplier.jpg"
import team from "../../Asset/Img/AboutUs/team.jpg"
import Transparency from "../../Asset/Img/AboutUs/Transparency.jpg"
import Navigation from "../../Asset/Img/AboutUs/Navigation.jpg"
import discount from "../../Asset/Img/AboutUs/discount.jpg"
import Footer from '../Footer/Footer'

const AboutUs = () => {
    return (
        <div>
        <div className='container'>
            <div className='about-wrapper'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 text-lg-start text-center '>
                        <img src={who_We} alt="Shopping" className='img-fluid' />
                    </div>
                    <div className='col-lg-6'>
                        <h6 className='title'> Who We Are </h6>
                        <h6 className='description'> Secret Item is a team of dedicated individuals passionate about bringing you the latest and greatest ecommerce products. We understand that finding the right products at the right prices can be a challenge, and that's where we come in. Our mission is to simplify your shopping journey, offering you handpicked items from reputable brands through our carefully curated affiliate partnerships.</h6>
                    </div>

                </div>

                <div className='row align-items-center'>
                    <div className='col-lg-6 order-lg-1 order-2'>
                        <h6 className='title'> What Sets Us Apart </h6>
                        <h6 className='description'>Exclusive Affiliate Partnerships
                            We've established strong affiliations with leading brands and trusted suppliers, allowing us to bring you exclusive deals and discounts that you won't find elsewhere. By shopping through our affiliate links, you not only access top-quality products but also unlock additional savings and perks.</h6>
                    </div>
                    <div className='col-lg-6 text-lg-end text-center order-lg-2 order-1'>
                        <img src={trusted_supplier} alt="Shopping" className='img-fluid' />
                    </div>
                </div>


                <div className='row align-items-center'>
                    <div className='col-lg-6 text-lg-start text-center'>
                        <img src={team} alt="Shopping" className='img-fluid' />
                    </div>
                    <div className='col-lg-6'>
                        <h6 className='title'> Curated Selection
                        </h6>
                        <h6 className='description'>Our team of experts scours the market to curate a diverse selection of products that cater to different tastes and needs. Whether you're a tech enthusiast, a fashionista, or someone seeking home essentials, our curated collection has something for everyone.</h6>
                    </div>
                </div>

                <div className='row align-items-center'>
                    <div className='col-lg-6 order-lg-1 order-2'>
                        <h6 className='title'> Transparency and Trust
                        </h6>
                        <h6 className='description'>We believe in transparency. When you shop through our affiliate links, you can trust that you're getting genuine recommendations. Our team carefully selects products based on quality, functionality, and value for money, ensuring that you receive the best the ecommerce world has to offer.</h6>
                    </div>
                    <div className='col-lg-6 text-lg-end text-center order-lg-2 order-1'>
                        <img src={Transparency} alt="Shopping" className='img-fluid' />
                    </div>
                </div>

                <div className='row align-items-center'>
                    <div className='col-lg-6 text-lg-start text-center'>
                        <img src={Navigation} alt="Shopping" className='img-fluid' />
                    </div>
                    <div className='col-lg-6'>
                        <h6 className='title'> Easy Navigation

                        </h6>
                        <h6 className='description'>Explore our user-friendly website designed to make your shopping experience enjoyable and straightforward. With intuitive navigation, you can effortlessly discover and purchase the products that match your preferences.
                        </h6>
                    </div>

                </div>

                <div className='row align-items-center'>

                    <div className='col-lg-6 order-lg-1 order-2'>
                        <h6 className='title'> Affiliate Discounts

                        </h6>
                        <h6 className='description'>By using our affiliate links, you unlock exclusive discounts and promotions that go beyond what's available on the market. We're committed to maximizing your savings while delivering top-notch products to your doorstep.

                        </h6>
                    </div>
                    <div className='col-lg-6 text-lg-end text-center order-lg-2 order-1'>
                        <img src={discount} alt="Shopping" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </div>
    )
}

export default AboutUs