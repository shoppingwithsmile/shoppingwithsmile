import React, { useEffect, useState } from 'react'
import "../Mens/Mens.scss"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Pagination } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

// ===== PRODUCT IMAGE =====
import BomberJacket from "../../Asset/Img/Mens/BomberJacket.jpg"
import LengthJacket from "../../Asset/Img/Mens/LengthJacket.jpg"
import GeoSlide from "../../Asset/Img/Mens/GeoSlide.jpg"
import Capri from "../../Asset/Img/Mens/Capri.jpg"
import SlimFitPants from "../../Asset/Img/Mens/SlimFitPants.jpg"
import SlimJeans from "../../Asset/Img/Mens/SlimJeans.jpg"
import EthnicStole from "../../Asset/Img/Mens/EthnicStole.jpg"
import DesignerStole from "../../Asset/Img/Mens/DesignerStole.jpg"
import FormalShirt from "../../Asset/Img/Mens/FormalShirt.jpg"
import FormalShirtSky from "../../Asset/Img/Mens/FormalShirtSky.jpg"
import FormalTrousers from "../../Asset/Img/Mens/FormalTrousers.jpg"
import FormalShirt2 from "../../Asset/Img/Mens/FormalShirt2.jpg"
import ChequeredFormalShirt from "../../Asset/Img/Mens/ChequeredFormalShirt.jpg"
import FormalShirt3 from "../../Asset/Img/Mens/FormalShirt3.jpg"
import ClassicSweater from "../../Asset/Img/Mens/ClassicSweater.jpg"
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

const ITEMS_PER_PAGE = 12;

const Mens = () => {
    const [activePage, setActivePage] = useState(1);


    useEffect(() => {
        AOS.init();
    }, []);


    const products = [
        {
            title: "Men Quilted Hooded Bomber Jacket",
            type: "Jacket",
            discount: 'Upto 60%',
            link: 'https://amzn.to/3Ra5lFU',
            imageSrc: BomberJacket,
        },
        {
            title: "Men's Nylon Standard Length Jacket",
            type: "Jacket",
            discount: 'Upto 70%',
            link: 'https://amzn.to/3GeCslq',
            imageSrc: LengthJacket,
        },
        {
            title: "Puma Unisex-Adult Geo Slide",
            type: "Geo Slide",
            discount: 'Upto 75%',
            link: 'https://amzn.to/47NnT4m',
            imageSrc: GeoSlide,
        },
        {
            title: "VEGO Mens Cotton Three by Fourth",
            type: "Capri",
            discount: 'Upto 55%',
            link: 'https://amzn.to/46sIXf2',
            imageSrc: Capri,
        },
        {
            title: "Van Heusen Men Slim Fit Pants",
            type: "Pants",
            discount: 'Upto 42%',
            link: 'https://amzn.to/3QJyuWM',
            imageSrc: SlimFitPants,
        },
        {
            title: "U.S. POLO ASSN. Men's Slim Jeans",
            type: "Slim Jeans",
            discount: 'Upto 50%',
            link: 'https://amzn.to/3uhEbUn',
            imageSrc: SlimJeans,
        },
        {
            title: 'Mens fine Soft Ethnic Stole Stole',
            type: "Stole",
            discount: 'Upto 60%',
            link: 'https://amzn.to/3uhEbUn',
            imageSrc: EthnicStole,
        },
        {
            title: 'Mens fine Soft Ethnic Stole Stole',
            type: "Stole",
            discount: 'Upto 60%',
            link: 'https://amzn.to/47KAkgX',
            imageSrc: DesignerStole,
        },
        {
            title: "Van Heusen Men's Formal Shirt",
            type: "Shirt",
            discount: 'Upto 60%',
            link: 'https://amzn.to/3R8mYFZ',
            imageSrc: FormalShirt,
        },
        {
            title: "Van Heusen Men's Formal Shirt",
            type: "Shirt",
            discount: 'Upto 60%',
            link: 'https://amzn.to/3G7LoJq',
            imageSrc: FormalShirtSky,
        },
        {
            title: "Van Heusen Men Formal Trousers",
            type: "Trousers",
            discount: 'Upto 60%',
            link: 'https://amzn.to/3STsiOK',
            imageSrc: FormalTrousers,
        },
        {
            title: "Van Heusen Men's Formal Shirt",
            type: "Black Shirt",
            discount: 'Upto 55%',
            link: 'https://amzn.to/49JAZBg',
            imageSrc: FormalShirt2,
        },
        {
            title: "Van Heusen chequered Formal Shirt",
            type: "chequered Shirt",
            discount: 'Upto 55%',
            link: 'https://amzn.to/3ukhXkC',
            imageSrc: ChequeredFormalShirt,
        },
        {
            title: "Van Heusen Men's Formal Shirt",
            type: "chequered Shirt",
            discount: 'Upto 55%',
            link: 'https://amzn.to/40OHX3S',
            imageSrc: FormalShirt3,
        },
        {
            title: "Van Heusen Men Cotton Classic Sweater",
            type: "Classic Sweater",
            discount: 'Upto 55%',
            link: 'https://amzn.to/3sNjrUb',
            imageSrc: ClassicSweater,
        },

    ];

    const shareViaWhatsApp = (productLink) => {
        const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(productLink)}`;
        window.open(whatsappURL, '_blank');
    };

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const renderProducts = () => {
        const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        return products.slice(startIndex, endIndex).map((product, index) => (
            <div className="col-xxl-3 col-lg-4 col-md-4 col-sm-6" key={index}>
                <div className='mens_card' data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
                    <img src={product.imageSrc} alt={product.title} className='img-fluid zoom' />
                    <div className='card_detail'>
                        <h6 className='card_title'> <span> Title :- </span> {product.title}</h6>
                        <h6 className='card_title'> <span> Type :- </span> {product.type}</h6>
                        <h6 className='card_title'> <span> Discount :- </span> {product.discount}</h6>
                        {/* <h6 className='card_title'> <span> MRP :- </span> <del> {product.mrp} </del></h6>
                                    <h6 className='card_title'> <span> Offer Price :- </span> {product.offerprice}</h6> */}
                        <div className='mt-3 d-flex align-items-center justify-content-between'>
                            <Link to={product.link} className='buy_now' target='_blank' rel="noopener noreferrer"> Info / Buy </Link>
                            <button className='buy_now' onClick={() => shareViaWhatsApp(product.link)}> <FontAwesomeIcon icon={faWhatsapp} size='xl' /></button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    return (
        <div>
            <div className='container'>
                <div className='common_wrapper mens_wrapper'>
                    <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Adventurous Men's Collection </h2>
                    <div className="row">
                        {renderProducts()}
                    </div>
                    <Pagination>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <Pagination.Item
                                key={index}
                                active={index + 1 === activePage}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Mens
