import React, { useEffect, useState } from 'react'
import "../Mens/Mens.scss"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "../Womens/Womens.scss"
import { Pagination } from 'react-bootstrap';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

// ===== PRODUCT IMAGE =====

import AnarkaliKurta from "../../Asset/Img/Women/AnarkaliKurta.jpg"
import WomenPants from "../../Asset/Img/Women/WomenPants.jpg"
import LeatherSlingbag from "../../Asset/Img/Women/LeatherSlingbag.jpg"
import MetallicSandals from "../../Asset/Img/Women/MetallicSandals.jpg"
import LinoPerrosBag from "../../Asset/Img/Women/LinoPerrosBag.jpg"
import PurseHandbag from "../../Asset/Img/Women/PurseHandbag.jpg"
import TraditionalKundan from "../../Asset/Img/Women/TraditionalKundan.jpg"
import JockeyPant from "../../Asset/Img/Women/JockeyPanty.jpg"
import Shapewear from "../../Asset/Img/Women/Shapewear.jpg"
import HipsterPanty from "../../Asset/Img/Women/HipsterPanty.jpg"
import NippleCovers from "../../Asset/Img/Women/NippleCovers.jpg"
import MulticolorAnarkaliKurta from "../../Asset/Img/Women/MulticolorAnarkaliKurta.jpg"
import BlockPrintKurta from "../../Asset/Img/Women/BlockPrintKurta.jpg"
import StraightPrintedKurtaPantDupatta from "../../Asset/Img/Women/StraightPrintedKurtaPantDupatta.jpg"
import PolyCrepeKurta from "../../Asset/Img/Women/PolyCrepeKurta.jpg"
import KurtawithPant from "../../Asset/Img/Women/KurtawithPant.jpg"
import CrepeSalwarSuit from "../../Asset/Img/Women/CrepeSalwarSuit.jpg"
import CrepePolkaPrint from "../../Asset/Img/Women/CrepePolkaPrint.jpg"
import FlaredWesternDress from "../../Asset/Img/Women/FlaredWesternDress.jpg"


const ITEMS_PER_PAGE = 12;

const Womens = () => {
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        AOS.init();
    }, []);


    const products = [
        {
            title: "Exclusive Women Pants",
            type: 'Women Pants',
            discount: 'Upto 60%',
            link: 'https://amzn.to/46wxgUK',
            imageSrc: WomenPants,
        },
        {
            title: "Floral Print Anarkali Kurta with Gota Panels",
            type: 'Anarkali Kurta',
            discount: 'Upto 55%',
            link: 'https://bitli.in/HQAngyE',
            imageSrc: AnarkaliKurta,
        },
        {
            title: "Artificial Leather Sling bag Peach Coloured",
            type: 'Leather bag',
            discount: 'Upto 75%',
            link: 'https://amzn.to/40TJjKw',
            imageSrc: LeatherSlingbag,
        },
        {
            title: "Open Toe Block Heel Metallic Fashion Sandals",
            type: 'Sandals',
            discount: 'Upto 80%',
            link: 'https://amzn.to/3ulCvcw',
            imageSrc: MetallicSandals,
        },
        {
            title: "Lino Perros Women's Handbag",
            type: 'Ladies Purse Handbag',
            discount: 'Upto 80%',
            link: 'https://amzn.to/3QOl3oJ',
            imageSrc: LinoPerrosBag,
        },
        {
            title: "Lavie Women's Ushawu Small Satchel Bag",
            type: 'Ladies Purse Handbag',
            discount: 'Upto 80%',
            link: 'https://amzn.to/3MXeXRF',
            imageSrc: PurseHandbag,
        },
        {
            title: "Traditional Kundan Jhumki Earring & Ring",
            type: 'Earring & Ring',
            discount: 'Upto 90%',
            link: 'https://amzn.to/47vuyjJ',
            imageSrc: TraditionalKundan,
        },
        {
            title: "Poly Crepe Polka Print A-line Kurta",
            type: 'Kurti',
            discount: 'Upto 85%',
            link: 'https://amzn.to/47GCgqN',
            imageSrc: CrepePolkaPrint,
        },
        {
            title: 'High Coverage Cotton Mid Waist Hipster',
            type: 'Panty',
            discount: 'Upto 60%',
            link: 'https://amzn.to/49Kxcni',
            imageSrc: JockeyPant,
        },
        {
            title: "Janasya Women's Crepe Salwar Suit",
            type: 'Salwar Suit',
            discount: 'Upto 90%',
            link: 'https://amzn.to/3SSGEPA',
            imageSrc: CrepeSalwarSuit,
        },
        {
            title: 'Comfortable Seamless Shapewear Beige',
            type: 'Shapewear ',
            discount: 'Upto 60%',
            link: 'https://amzn.to/3R8rN1X',
            imageSrc: Shapewear,
        },
        {
            title: 'Van Heusen Hipster Panty',
            type: 'Panty ',
            discount: 'Upto 60%',
            link: 'https://amzn.to/3QNAs8O',
            imageSrc: HipsterPanty,
        },

        {
            title: 'Multicolor Cotton Floral Print Anarkali Kurta',
            type: 'Kurti',
            discount: 'Upto 80%',
            link: 'https://amzn.to/3Gag8JN',
            imageSrc: MulticolorAnarkaliKurta,
        },
        {
            title: 'Pure Cotton Block Print Straight Kurta',
            type: 'Kurti',
            discount: 'Upto 80%',
            link: 'https://amzn.to/40Qrig9',
            imageSrc: BlockPrintKurta,
        },
        {
            title: 'Cotton Blend Straight Printed',
            type: '3 Pcs',
            discount: 'Upto 80%',
            link: 'https://amzn.to/3sIEjfe',
            imageSrc: StraightPrintedKurtaPantDupatta,
        },
        {
            title: 'Pasties for Women Nipple Covers',
            type: 'Nipple Covers',
            discount: 'Upto 60%',
            link: 'https://amzn.to/3sANRJn',
            imageSrc: NippleCovers,
        },
        {
            title: "Janasya Women's Poly Crepe Kurta",
            type: 'Poly Crepe Kurta',
            discount: 'Upto 85%',
            link: 'https://amzn.to/47r8MOe',
            imageSrc: PolyCrepeKurta,
        },
        {
            title: "Janasya Women's Crepe A-line Kurta with Pant",
            type: 'Kurta with Pant',
            discount: 'Upto 90%',
            link: 'https://amzn.to/3GaIWBP',
            imageSrc: KurtawithPant,
        },
        {
            title: "Green Poly Chiffon Western Dress",
            type: 'Western Dress',
            discount: 'Upto 85%',
            link: 'https://amzn.to/3G7V1YL',
            imageSrc: FlaredWesternDress,
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
                    <div className='card_detail' >
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
            <div>
                <div className='container'>
                    <div className='common_wrapper womens_wrapper'>
                        <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Her Signature Look </h2>
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

            </div>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Womens
