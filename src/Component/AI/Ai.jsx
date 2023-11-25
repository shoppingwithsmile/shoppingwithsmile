import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../../Component/Mens/Mens.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Pagination } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

// ===== Product Image =====

import ArticleAi from "../../Asset/Img/AI/ArticleAi.png"
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

const ITEMS_PER_PAGE = 12;

const AI = () => {
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    AOS.init();
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const products = [
    {
      title: 'AI Article Writer With Multi-Language',
      type: "Artificial Generator",
      discount: '',
      link: 'https://autoblogging.ai/?sld=secretsaving',
      imageSrc: ArticleAi,
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
      <div className="col-xxl-3 col-lg-3 col-md-4 col-sm-6" key={index}>
        <div className='mens_card' data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
          <img src={product.imageSrc} alt={product.title} className='img-fluid zoom' />
          <div className='card_detail'>
            <h6 className='card_title'> <span> Title :- </span> {product.title}</h6>
            <h6 className='card_title'> <span> Type :- </span> {product.type}</h6>
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
          <h2 className='title' data-aos="zoom-in" data-aos-duration="3000"> Unlocking the Future: The Power of Artificial Intelligence  </h2>
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

export default AI