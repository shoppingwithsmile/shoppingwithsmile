import React, { useEffect, useState } from 'react'
import "../Mens/Mens.scss"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Pagination } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ===== PRODUCT IMAGE =====

import Alphabet from "../../Asset/Img/Kids/Alphabet.webp"
import GripSocks from "../../Asset/Img/Kids/GripSocks.jpg"
import FloralHairBand from "../../Asset/Img/Kids/FloralHairBand.jpg"
import GirlsJeans from "../../Asset/Img/Kids/HoneyGirlsJeans.jpg"
import Jeggings from "../../Asset/Img/Kids/Jeggings.jpg"
import ClassicTrackPants from "../../Asset/Img/Kids/ClassicTrackPants.jpg"
import LevisGirlsJeans from "../../Asset/Img/Kids/LevisGirlsJeans.jpg"
import WhiteGirlJeans from "../../Asset/Img/Kids/WhiteGirlJeans.jpg"
import LearningGame from "../../Asset/Img/Kids/LearningGame.jpg"
import ScienceKit from "../../Asset/Img/Kids/ScienceKit.jpg"
import HoverballSoccer from "../../Asset/Img/Kids/HoverballSoccer.jpg"
import MagnetsAnimals from "../../Asset/Img/Kids/MagnetsAnimals.webp"
import BabySoundToy from "../../Asset/Img/Kids/BabySoundToy.jpg"
import WoodenToysBox from "../../Asset/Img/Kids/WoodenToysBox.jpg"
import CableWorldPlastic from "../../Asset/Img/Kids/CableWorldPlastic.jpg"
import CarRaceTracks from "../../Asset/Img/Kids/CarRaceTracks.jpg"
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

const ITEMS_PER_PAGE = 12;

const Kids = () => {
    const [activePage, setActivePage] = useState(1);
    useEffect(() => {
        AOS.init();
    }, []);

    const handlePageChange = (page) => {
        setActivePage(page);
    };

  

    const products = [
        {
            title:'xelix 16 Alphabet & Shape Blocks Toys',
            type: "Alphabet Toy",
            discount: 'Upto 80% ',
            link: 'https://fktr.in/yVqqw2w',
            imageSrc: Alphabet,
          },
        {
            title: "Baby Boy's Cotton Anti Slip Grip Socks",
            type: 'Grip Socks',
            discount: 'Upto 50%',
            link: 'https://amzn.to/47JoLH8',
            imageSrc: GripSocks,
        },
        {
            title: 'Flower Headbands Elastic Floral Hair Band',
            type: 'Hair Band',
            discount: 'Upto 75%',
            link: 'https://amzn.to/3SN97Gq',
            imageSrc: FloralHairBand,
        },
        {
            title: 'Amazon Brand - Jam & Honey Girls Jeans',
            type: 'Girls Jeans',
            discount: 'Upto 80%',
            link: 'https://amzn.to/3SO6Omj',
            imageSrc: GirlsJeans,
        },
        {
            title: "SOUTH TREE Girl's Regular Fit Jeggings",
            type: 'Jeggings ',
            discount: 'Upto 65%',
            link: 'https://amzn.to/47GWe4J',
            imageSrc: Jeggings,
        },
        {
            title: "MINITATU Unisex-Baby Classic Track Pants",
            type: 'Track Pants',
            discount: 'Upto 75%',
            link: 'https://amzn.to/3QSulA7',
            imageSrc: ClassicTrackPants,
        },
        {
            title: "Levi's Exclusive Girls Jeans",
            type: "Levi's Girls Jeans",
            discount: 'Upto 45%',
            link: 'https://amzn.to/3up2D6z',
            imageSrc: LevisGirlsJeans,
        },
        {
            title: "Levi's Exclusive Girl White Jeans",
            type: "Girls Jeans",
            discount: 'Upto 50%',
            link: 'https://amzn.to/3SXpznH',
            imageSrc: WhiteGirlJeans,
        },
        {
            title: "Indoor & Outdoor Fun Learning Game",
            type: "Girls Jeans",
            discount: 'Upto 50%',
            link: 'https://amzn.to/3SPY3YW',
            imageSrc: LearningGame,
        },
        {
            title: "Kids Safe Science Kit Educational Fun Toys",
            type: "Fun Toys",
            discount: 'Upto 50%',
            link: 'https://amzn.to/3QO4MQK',
            imageSrc: ScienceKit,
        },
        {
            title: "Indoor Floating Hoverball Soccer",
            type: "Soccer",
            discount: 'Upto 30%',
            link: 'https://amzn.to/49JLEMn',
            imageSrc: HoverballSoccer,
        },
        {
            title: "Skillmatics Dot It with Magnets Animals",
            type: "Magnets Animals",
            discount: 'Upto 30%',
            link: 'https://amzn.to/3QPjqXN',
            imageSrc: MagnetsAnimals,
        },
        {
            title: "DITTY BIRD Baby Sound Toy",
            type: "Sound Toy",
            discount: 'Upto 20%',
            link: 'https://amzn.to/3R91vfZ',
            imageSrc: BabySoundToy,
        },
        {
            title: "Learning Wooden Toys Box",
            type: "Wooden Toys",
            discount: 'Upto 20%',
            link: 'https://amzn.to/47DNcW8',
            imageSrc: WoodenToysBox,
        },
        {
            title: "3 in 1 Portable Kitchen Play Set",
            type: "Kitchen Play Set",
            discount: 'Upto 85%',
            link: 'https://amzn.to/3SQ6pQk',
            imageSrc: CableWorldPlastic,
        },
        {
            title: "Car Adventure Toys for Boys & Girls",
            type: "car toy",
            discount: 'Upto 70%',
            link: 'https://amzn.to/3ureIIf',
            imageSrc: CarRaceTracks,
        },
    ];

    const shareViaWhatsApp = (productLink) => {
        const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(productLink)}`;
        window.open(whatsappURL, '_blank');
    };

    const renderProducts = () => {
        const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        return products.slice(startIndex, endIndex).map((product, index) => (
            <div className="col-xxl-3 col-lg-4 col-md-4 col-sm-6" key={index}>
                <div className='mens_card' data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
                    <img src={product.imageSrc} alt={product.title} className='img-fluid zoom' />
                    <div className='card_detail'>
                        {/* <h6 className='card_title'> <span> Type :- </span> {product.type}</h6> */}
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
                <div className='common_wrapper'>
                    <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Cuteness & Colorful Choices </h2>
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

export default Kids
