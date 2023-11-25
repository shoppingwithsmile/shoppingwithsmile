import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Home/Home.scss"


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


// ===== HERO SLIDER  =====
import SolidPista from "../../Asset/Img/Hero_Slider/SolidPista.png"
import EthnicStoles from "../../Asset/Img/Hero_Slider/EthnicStole.png"
import KitchenSet from "../../Asset/Img/Hero_Slider/KitchenSet.png"
import AirplaneClock from "../../Asset/Img/Hero_Slider/AirplaneClock.png"
import CeilingFans from "../../Asset/Img/Hero_Slider/CeilingFan.png"

// ===== WOMENS SLIDER =====

import Shapewear from "../../Asset/Img/Women/Shapewear.jpg"
import FlaredWesternDress from "../../Asset/Img/Women/FlaredWesternDress.jpg"
import MulticolorAnarkaliKurta from "../../Asset/Img/Women/MulticolorAnarkaliKurta.jpg"
import BlockPrintKurta from "../../Asset/Img/Women/BlockPrintKurta.jpg"
import CrepeSalwarSuit from "../../Asset/Img/Women/CrepeSalwarSuit.jpg"
import CrepePolkaPrint from "../../Asset/Img/Women/CrepePolkaPrint.jpg"

// ===== MENS SLIDER =====

import EthnicStole from "../../Asset/Img/Mens/EthnicStole.jpg"
import DesignerStole from "../../Asset/Img/Mens/DesignerStole.jpg"
import FormalShirt from "../../Asset/Img/Mens/FormalShirt.jpg"
import FormalShirtSky from "../../Asset/Img/Mens/FormalShirtSky.jpg"
import FormalTrousers from "../../Asset/Img/Mens/FormalTrousers.jpg"
import FormalShirt2 from "../../Asset/Img/Mens/FormalShirt2.jpg"
import ChequeredFormalShirt from "../../Asset/Img/Mens/ChequeredFormalShirt.jpg"

// ===== KIDS SLIDER =====

import GirlsJeans from "../../Asset/Img/Kids/HoneyGirlsJeans.jpg"
import Jeggings from "../../Asset/Img/Kids/Jeggings.jpg"
import ClassicTrackPants from "../../Asset/Img/Kids/ClassicTrackPants.jpg"
import LevisGirlsJeans from "../../Asset/Img/Kids/LevisGirlsJeans.jpg"
import WhiteGirlJeans from "../../Asset/Img/Kids/WhiteGirlJeans.jpg"
import LearningGame from "../../Asset/Img/Kids/LearningGame.jpg"
import ScienceKit from "../../Asset/Img/Kids/ScienceKit.jpg"

// ===== GADGETS SLIDER =====

import CleaningKit from "../../Asset/Img/gadgets/CleaningKit.jpg"
import SmartSpeaker from "../../Asset/Img/gadgets/SmartSpeaker.jpg"
import TableClock from "../../Asset/Img/gadgets/TableClock.webp"
import NeckFan from "../../Asset/Img/gadgets/NeckFan.jpg"
import FmRadio from "../../Asset/Img/gadgets/FmRadio.jpg"

// ===== HOME & KITCHEN SLIDER =====

import Heater from "../../Asset/Img/Kitchcen/CromptonHeater.jpg"
import Juicer from "../../Asset/Img/Kitchcen/NutriProJuicer.jpg"
import Steamer from "../../Asset/Img/Kitchcen/GarmentSteamer.jpg"
import CeilingFan from "../../Asset/Img/Kitchcen/CeilingFan.jpg"
import LaundryBasket from "../../Asset/Img/Kitchcen/LaundryBasket.jpg"
import SewingMachine from "../../Asset/Img/Kitchcen/SewingMachine.jpg"
import AgaroOven from "../../Asset/Img/Kitchcen/AgaroOven.jpg"

// ===== ICON =====

import rightArrow from "../../Asset/Img/Icon/arrow-right.png"
import leftArrow from "../../Asset/Img/Icon/arrow-left.png"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    const CustomPrevButton = (props) => (
        <button {...props} className="custom-prev-button">
            <img src={leftArrow} alt="" />
        </button>
    );

    const CustomNextButton = (props) => (
        <button {...props} className="custom-next-button">
            <img src={rightArrow} alt="" />
        </button>
    );

    const shareViaWhatsApp = (productLink) => {
        const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(productLink)}`;
        window.open(whatsappURL, '_blank');
    };

    // ===== HERO SLIDER =====

    // const hero_slider = {
    //     dot: true,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: <CustomPrevButton />,
    //     nextArrow: <CustomNextButton />,

    // };

    // ===== WOMEN'S SLIDER =====

    const womens_slider = {
        dot: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevButton />,
        nextArrow: <CustomNextButton />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const womensproducts = [
        {
            title: "Poly Crepe Polka Print A-line Kurta",
            type: 'Kurti',
            discount: 'Upto 85%',
            link: 'https://amzn.to/47GCgqN',
            imageSrc: CrepePolkaPrint,
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
            title: "Green Poly Chiffon Western Dress",
            type: 'Western Dress',
            discount: 'Upto 85%',
            link: 'https://amzn.to/3G7V1YL',
            imageSrc: FlaredWesternDress,
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

    ];

    // ===== MEN'S SLIDER =====

    const mens_slider = {
        dot: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevButton />,
        nextArrow: <CustomNextButton />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const mensproducts = [
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

    ];

    // ===== KID'S SLIDER =====

    const kids_slider = {
        dot: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevButton />,
        nextArrow: <CustomNextButton />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const kidsproducts = [
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
    ];


    // ===== GADGET'S SLIDER =====

    const gadgets_slider = {
        dot: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevButton />,
        nextArrow: <CustomNextButton />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const gadgetsproducts = [
        {
            title: '19 in 1 Smart Gadget Cleaning Kit',
            type: "Gadget",
            discount: 'Upto 60% ',
            link: 'https://amzn.to/3G9lG7l',
            imageSrc: CleaningKit,
        },
        {
            title: 'Smart speaker with Bigger sound',
            type: "Gadget",
            discount: 'Upto 60% ',
            link: 'https://amzn.to/40OFExN',
            imageSrc: SmartSpeaker,
        },
        {
            title: 'Airplane Miniature Desk Clocks',
            type: "Gadget",
            discount: 'Upto 60% ',
            link: 'https://amzn.to/3SSQiS6',
            imageSrc: TableClock,
        },
        {
            title: 'Neck Portable Fan Strong Wind',
            type: "Gadget",
            discount: 'Upto 60% ',
            link: 'https://amzn.to/3GaOV9U',
            imageSrc: NeckFan,
        },
        {
            title: 'FM Radio with Bluetooth Speaker',
            type: "Gadget",
            discount: 'Upto 60% ',
            link: 'https://amzn.to/3SRrp9s',
            imageSrc: FmRadio,
        },
    ];

    // ===== HOME & KITCHEN SLIDER =====

    const homekitchen_slider = {
        dot: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevButton />,
        nextArrow: <CustomNextButton />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const homekitchenproducts = [
        {
            title: 'Crompton 5 Star Rated  Heater',
            type: "Home & Kitchen",
            discount: 'Upto 50%',
            link: 'https://amzn.to/49InKRo',
            imageSrc: Heater,
        },
        {
            title: 'NutriPro Juicer Mixer Grinder',
            type: "Home & Kitchen",
            discount: 'Upto 60%',
            link: 'https://amzn.to/3R7z6XF',
            imageSrc: Juicer,
        },
        {
            title: 'PHILIPS Garment Steamer',
            type: "Home & Kitchen",
            discount: 'Upto 60%',
            link: 'https://amzn.to/3un301s',
            imageSrc: Steamer,
        },
        {
            title: 'Crompton Ceiling Fan 48 inch',
            type: "Home & Kitchen",
            discount: 'Upto 50%',
            link: 'https://amzn.to/3sKxwSh',
            imageSrc: CeilingFan,
        },
        {
            title: 'Cello Plastic Laundry Basket',
            type: "Home & Kitchen",
            discount: 'Upto 50%',
            link: 'https://amzn.to/47EVgGi',
            imageSrc: LaundryBasket,
        },
        {
            title: 'Sewing Machine with Table Set',
            type: "Home & Kitchen",
            discount: 'Upto 50%',
            link: 'https://amzn.to/3un3apn',
            imageSrc: SewingMachine,
        },
        {
            title: 'AGARO Marvel 9 Liters Oven',
            type: "Home & Kitchen",
            discount: 'Upto 50%',
            link: 'https://amzn.to/47FfsrF',
            imageSrc: AgaroOven,
        },
    ];


    return (
        <div>
        <div className='container'>
            <div className='home-wrapper mt-30'>
                {/* <h2 className='title'> Hot Deal </h2> */}
                {/* <div className=''>
                    <div>
                        <Slider {...hero_slider}>
                            <div>
                                <Link to="https://amzn.to/3GaIWBP" target='_blank'>
                                    <img src={SolidPista} alt="" className='img-fluid' />
                                </Link>
                            </div>
                            <div>
                                <Link to="https://amzn.to/3uhEbUn" target='_blank'>
                                    <img src={EthnicStoles} alt="" className='img-fluid' />
                                </Link>
                            </div>
                            <div>
                                <Link to="https://amzn.to/3SQ6pQk" target='_blank'>
                                    <img src={KitchenSet} alt="" className='img-fluid' />
                                </Link>
                            </div>
                            <div>
                                <Link to="https://amzn.to/3SSQiS6" target='_blank'>
                                    <img src={AirplaneClock} alt="" className='img-fluid' />
                                </Link>
                            </div>
                            <div>
                                <Link to="https://amzn.to/40P2i9b" target='_blank'>
                                    <img src={CeilingFans} alt="" className='img-fluid' />
                                </Link>
                            </div>
                        </Slider>
                    </div>
                </div> */}

                {/* ===== Womens Slider ===== */}

                <div className='common_wrapper womens_wrapper'>
                    <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Women's collection </h2>
                    <div>
                        <Slider {...womens_slider}>
                            {womensproducts.map((product, index) => (
                                <div key={index}>
                                    <div className='mens_card mx-md-2 mx-sm-1'>
                                        <img src={product.imageSrc} alt={product.title} className='img-fluid' />
                                        <div className='card_detail'>
                                            <h6 className='card_title'> <span> Title :- </span> {product.title}</h6>
                                            <h6 className='card_title'> <span> Type :- </span> {product.type}</h6>
                                            <h6 className='card_title'> <span> Discount :- </span> {product.discount}</h6>
                                            <div className='mt-3 d-flex align-items-center justify-content-between'>
                                                <Link to={product.link} className='buy_now' target='_blank' rel="noopener noreferrer"> Info / Buy </Link>
                                                <button className='buy_now' onClick={() => shareViaWhatsApp(product.link)}> <FontAwesomeIcon icon={faWhatsapp} size='xl' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className='text-center'>
                        <button className='more-button'> <Link to="/womens"> More Product </Link>  </button>
                    </div>
                </div>

                <hr></hr>

                {/* ===== mens Slider ===== */}

                <div className='common_wrapper mens_wrapper'>
                    <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Men's collection </h2>
                    <div>
                        <Slider {...mens_slider}>
                            {mensproducts.map((product, index) => (
                                <div key={index}>
                                    <div className='mens_card mx-md-2 mx-sm-1'>
                                        <img src={product.imageSrc} alt={product.title} className='img-fluid' />
                                        <div className='card_detail'>
                                            <h6 className='card_title'> <span> Title :- </span> {product.title}</h6>
                                            <h6 className='card_title'> <span> Type :- </span> {product.type}</h6>
                                            <h6 className='card_title'> <span> Discount :- </span> {product.discount}</h6>
                                            <div className='mt-3 d-flex align-items-center justify-content-between'>
                                                <Link to={product.link} className='buy_now' target='_blank' rel="noopener noreferrer"> Info / Buy </Link>
                                                <button className='buy_now' onClick={() => shareViaWhatsApp(product.link)}> <FontAwesomeIcon icon={faWhatsapp} size='xl' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className='text-center'>
                        <button className='more-button'> <Link to="/mens"> More Product </Link>  </button>
                    </div>
                </div>

                <hr></hr>

                {/* ===== Kids Slider ===== */}

                <div className='common_wrapper'>
                    <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Kid's collection </h2>
                    <div>
                        <Slider {...kids_slider}>
                            {kidsproducts.map((product, index) => (
                                <div key={index}>
                                    <div className='mens_card mx-md-2 mx-sm-1'>
                                        <img src={product.imageSrc} alt={product.title} className='img-fluid' />
                                        <div className='card_detail'>
                                            <h6 className='card_title'> <span> Title :- </span> {product.title}</h6>
                                            <h6 className='card_title'> <span> Type :- </span> {product.type}</h6>
                                            <h6 className='card_title'> <span> Discount :- </span> {product.discount}</h6>
                                            <div className='mt-3 d-flex align-items-center justify-content-between'>
                                                <Link to={product.link} className='buy_now' target='_blank' rel="noopener noreferrer"> Info / Buy </Link>
                                                <button className='buy_now' onClick={() => shareViaWhatsApp(product.link)}> <FontAwesomeIcon icon={faWhatsapp} size='xl' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className='text-center'>
                        <button className='more-button'> <Link to="/kids"> More Product </Link>  </button>
                    </div>
                </div>

                <hr></hr>

                {/* ===== Gadgets Slider ===== */}

                <div className='common_wrapper'>
                    <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Gadgets collection </h2>
                    <div>
                        <Slider {...gadgets_slider}>
                            {gadgetsproducts.map((product, index) => (
                                <div key={index}>
                                    <div className='mens_card mx-md-2 mx-sm-1'>
                                        <img src={product.imageSrc} alt={product.title} className='img-fluid' />
                                        <div className='card_detail'>
                                            <h6 className='card_title'> <span> Title :- </span> {product.title}</h6>
                                            <h6 className='card_title'> <span> Type :- </span> {product.type}</h6>
                                            <h6 className='card_title'> <span> Discount :- </span> {product.discount}</h6>
                                            <div className='mt-3 d-flex align-items-center justify-content-between'>
                                                <Link to={product.link} className='buy_now' target='_blank' rel="noopener noreferrer"> Info / Buy </Link>
                                                <button className='buy_now' onClick={() => shareViaWhatsApp(product.link)}> <FontAwesomeIcon icon={faWhatsapp} size='xl' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className='text-center'>
                        <button className='more-button'> <Link to="/gadgets"> More Product </Link>  </button>
                    </div>
                </div>

                <hr></hr>

                {/* ===== Home & Kitchen Slider ===== */}

                <div className='common_wrapper'>
                    <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Home & Kitchen collection </h2>
                    <div>
                        <Slider {...homekitchen_slider}>
                            {homekitchenproducts.map((product, index) => (
                                <div key={index}>
                                    <div className='mens_card mx-md-2 mx-sm-1'>
                                        <img src={product.imageSrc} alt={product.title} className='img-fluid' />
                                        <div className='card_detail'>
                                            <h6 className='card_title'> <span> Title :- </span> {product.title}</h6>
                                            <h6 className='card_title'> <span> Type :- </span> {product.type}</h6>
                                            <h6 className='card_title'> <span> Discount :- </span> {product.discount}</h6>
                                            <div className='mt-3 d-flex align-items-center justify-content-between'>
                                                <Link to={product.link} className='buy_now' target='_blank' rel="noopener noreferrer"> Info / Buy </Link>
                                                <button className='buy_now' onClick={() => shareViaWhatsApp(product.link)}> <FontAwesomeIcon icon={faWhatsapp} size='xl' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className='text-center'>
                        <button className='more-button'> <Link to="/homeandkitchen"> More Product </Link>  </button>
                    </div>
                </div>

                <hr></hr>

            </div>
        </div>
            <ScrollToTop />
            <Footer/>
        </div>
    )
}

export default Home