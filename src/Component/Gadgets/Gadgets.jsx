import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../../Component/Mens/Mens.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Pagination } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

// ===== Product Image =====

import FridgeContainers from "../../Asset/Img/gadgets/FridgeContainers.jpg"
import TVMountDeskTable from "../../Asset/Img/gadgets/TVMountDeskTable.jpg"
import LaptopFoldableStand from "../../Asset/Img/gadgets/LaptopFoldableStand.jpg"
import DryFruitCutter from "../../Asset/Img/gadgets/DryFruitCutter.jpg"
import CleaningKit from "../../Asset/Img/gadgets/CleaningKit.jpg"
import SmartSpeaker from "../../Asset/Img/gadgets/SmartSpeaker.jpg"
import TableClock from "../../Asset/Img/gadgets/TableClock.webp"
import NeckFan from "../../Asset/Img/gadgets/NeckFan.jpg"
import FmRadio from "../../Asset/Img/gadgets/FmRadio.jpg"
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

const ITEMS_PER_PAGE = 12;

const Gadgets = () => {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    AOS.init();
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

    const products = [
     
        {
          title:'Plastic fridge accessories items',
          type: "Stand",
          discount: 'Upto 50% ',
          link: 'https://amzn.to/47o6b7r',
          imageSrc: FridgeContainers,
        },
        {
          title:'Dual Two 2 Screen Monitor Bracket',
          type: "Stand",
          discount: 'Upto 50% ',
          link: 'https://amzn.to/49LWHEL',
          imageSrc: TVMountDeskTable,
        },
        {
          title:'Wooden Craft Handmade Tabletop Laptop Stand',
          type: "Laptop Stand",
          discount: 'Upto 60% ',
          link: 'https://amzn.to/3T16DnI',
          imageSrc: LaptopFoldableStand,
        },
        {
          title:'Plastic Dry Fruit Cutter',
          type: "Cutter",
          discount: 'Upto 90% ',
          link: 'https://amzn.to/47s3LVm',
          imageSrc: DryFruitCutter,
        },
        {
          title:'19 in 1 Smart Gadget Cleaning Kit',
          type: "Gadget",
          discount: 'Upto 60% ',
          link: 'https://amzn.to/3G9lG7l',
          imageSrc: CleaningKit,
        },
        {
          title:'Smart speaker with Bigger sound',
          type: "Gadget",
          discount: 'Upto 60% ',
          link: 'https://amzn.to/40OFExN',
          imageSrc: SmartSpeaker,
        },
        {
          title:'Airplane Miniature Desk Clocks',
          type: "Gadget",
          discount: 'Upto 60% ',
          link: 'https://amzn.to/3SSQiS6',
          imageSrc: TableClock,
        },
        {
          title:'Neck Portable Fan Strong Wind',
          type: "Gadget",
          discount: 'Upto 60% ',
          link: 'https://amzn.to/3GaOV9U',
          imageSrc: NeckFan,
        },
        {
          title:'FM Radio with Bluetooth Speaker',
          type: "Gadget",
          discount: 'Upto 60% ',
          link: 'https://amzn.to/3SRrp9s',
          imageSrc: FmRadio,
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
            <img src={product.imageSrc} alt={product.imageSrc} className='img-fluid zoom' />
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
          <div className='common_wrapper'>
            <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Innovative Wonders: Unveiling the Marvels of Modern Gadgets  </h2>
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
      )
}

export default Gadgets