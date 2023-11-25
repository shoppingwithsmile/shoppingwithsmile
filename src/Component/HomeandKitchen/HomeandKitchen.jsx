import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Pagination } from 'react-bootstrap';

import "../../Component/Mens/Mens.scss";
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

// ===== Product Image =====

import ContainersLunchBox from "../../Asset/Img/Kitchcen/ContainersLunchBox.webp"
import ManualGasStove from "../../Asset/Img/Kitchcen/ManualGasStove.webp"
import CookwareSet from "../../Asset/Img/Kitchcen/CookwareSet.webp"
import Heater from "../../Asset/Img/Kitchcen/CromptonHeater.jpg"
import Juicer from "../../Asset/Img/Kitchcen/NutriProJuicer.jpg"
import Steamer from "../../Asset/Img/Kitchcen/GarmentSteamer.jpg"
import CeilingFan from "../../Asset/Img/Kitchcen/CeilingFan.jpg"
import LaundryBasket from "../../Asset/Img/Kitchcen/LaundryBasket.jpg"
import SewingMachine from "../../Asset/Img/Kitchcen/SewingMachine.jpg"
import AgaroOven from "../../Asset/Img/Kitchcen/AgaroOven.jpg"
import RemoteFans from "../../Asset/Img/Kitchcen/RemoteControlFans.webp"
import CarAirPurifier from "../../Asset/Img/Kitchcen/CarAirPurifier.jpg"
import PortableBlender from "../../Asset/Img/Kitchcen/PortableBlender.jpg"
import VacuumCleaner from "../../Asset/Img/Kitchcen/VacuumCleaner.jpg"
import HighPressureMachine from "../../Asset/Img/Kitchcen/HighPressureMachine.jpg"
import SandwichMaker from "../../Asset/Img/Kitchcen/SandwichMaker.jpg"
import PhilipsVacuumCleaner from "../../Asset/Img/Kitchcen/PhilipsVacuumCleaner.jpg"
import RobotVacuumCleaner from "../../Asset/Img/Kitchcen/RobotVacuumCleaner.jpg"
  

const ITEMS_PER_PAGE = 12;

const HomeandKitchen = () => {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    AOS.init();
  }, []);

const products = [
  {
    title:'Crompton 5 Star Rated  Heater',
    type: "Home & Kitchen",
    discount: 'Upto 50%',
    link: 'https://amzn.to/49InKRo',
    imageSrc: Heater,
  },
        {
          title:'Oliveware 3 Containers Lunch Box ',
          type: "Lunch Box",
          discount: 'Upto 75%',
          link: 'https://fktr.in/D9ooJwT',
          imageSrc: ContainersLunchBox,
        },
      
        {
          title:'Khaitan  Manual Gas Stove',
          type: "Gas Stove",
          discount: 'Upto 75%',
          link: 'https://fktr.in/46cFJVw',
          imageSrc: ManualGasStove,
        },
       
        {
          title:'Crompton 5 Star Rated  Heater',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/49InKRo',
          imageSrc: Heater,
        },
        {
          title:'Pigeon Cookware Set',
          type: "Cookware Set",
          discount: 'Upto 65%',
          link: 'https://fktr.in/M5Lt5cW',
          imageSrc: CookwareSet,
        },
        {
          title:'NutriPro Juicer Mixer Grinder',
          type: "Home & Kitchen",
          discount: 'Upto 60%',
          link: 'https://amzn.to/3R7z6XF',
          imageSrc: Juicer,
        },
        {
          title:'PHILIPS Garment Steamer',
          type: "Home & Kitchen",
          discount: 'Upto 60%',
          link: 'https://amzn.to/3un301s',
          imageSrc:Steamer,
        },
        {
          title:'Crompton Ceiling Fan 48 inch',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/3sKxwSh',
          imageSrc:CeilingFan,
        },
        {
          title:'Cello Plastic Laundry Basket',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/47EVgGi',
          imageSrc:LaundryBasket,
        },
        {
          title:'Sewing Machine with Table Set',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/3un3apn',
          imageSrc:SewingMachine,
        },
        {
          title:'AGARO Marvel 9 Liters Oven',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/47FfsrF',
          imageSrc:AgaroOven,
        },
        {
          title:'Fans with Remote Control',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/40P2i9b',
          imageSrc:RemoteFans,
        },
        {
          title:'GOODAIR Royal Car Air Purifier',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/49EXaZv',
          imageSrc:CarAirPurifier,
        },
        {
          title:'Multipurpose Portable Blender',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/47Kvm47',
          imageSrc:PortableBlender,
        },
        {
          title:'Vacuum Cleaner with Technology',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/3R8xnBD',
          imageSrc:VacuumCleaner,
        },
        {
          title:'High Pressure Car Washer Machine',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/49WAJiy',
          imageSrc:HighPressureMachine,
        },
        {
          title:'Sandwich Maker with Floating Hinges',
          type: "Home & Kitchen",
          discount: 'Upto 50%',
          link: 'https://amzn.to/3sB65KP',
          imageSrc:SandwichMaker,
        },
        {
          title:'Philips Vacuum Cleaner for home',
          type: "Home & Kitchen",
          discount: 'Upto 30%',
          link: 'https://amzn.to/47JPrHy',
          imageSrc:PhilipsVacuumCleaner,
        },
        {
          title:'ECOVACS Robot Vacuum Cleaner Covers 4000+ Sq.',
          type: "Home & Kitchen",
          discount: 'Upto 70%',
          link: 'https://amzn.to/3QLXdtS',
          imageSrc:RobotVacuumCleaner,
        }
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
          <img src={product.imageSrc} alt={product.imageSrc} className='img-fluid zoom' />
          <div className='card_detail'>
            <h6 className='card_title'> <span> Title :- </span> {product.title}</h6>
            <h6 className='card_title'> <span> Type :- </span> {product.type}</h6>
            <h6 className='card_title'> <span> Discount :- </span> {product.discount}</h6>
            <div className='mt-3 d-flex align-items-center justify-content-between'>
              <Link to={product.link} className='buy_now' target='_blank' rel="noopener noreferrer"> Info / Buy </Link>
              <button className='buy_now' onClick={() => shareViaWhatsApp(product.link)}>
                <FontAwesomeIcon icon={faWhatsapp} size='xl' />
              </button>
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
          <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Essentially Yours: Home and Kitchen Marvels  </h2>
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
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}

export default HomeandKitchen;
