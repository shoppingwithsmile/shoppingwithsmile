import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const TermsandCondition = () => {
    return (
        <div>
            <div className='container'>
                {/* <Headers /> */}

                <div className="terms-and-conditions">
                    <h1 className='title text-center'>Terms and Conditions</h1>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Acceptance of Terms </h5>
                        <p>
                            By using our affiliate links to purchase products, you agree to abide by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our affiliate links.
                        </p>
                    </section>

                    {/* <section className='mt-4'>
                        <h5 className='sub_title text-start'> Affiliate Relationship </h5>
                        <p>
                            When you make a purchase through our affiliate links, we may earn a commission. This commission does not affect the price you pay for the product.
                        </p>
                    </section> */}

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Product Availability </h5>
                        <p>
                            We do not guarantee the availability of products through our affiliate links. Product availability and prices are subject to change without notice.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Pricing and Payment </h5>
                        <p>
                            The prices of products are determined by the respective merchants. We are not responsible for any discrepancies in pricing or payment issues. Please refer to the merchant's website for accurate pricing information.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Returns and Refunds </h5>
                        <p>
                            Returns and refunds are subject to the policies of the merchant from whom you purchased the product. We are not responsible for the return or refund process.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Privacy Policy </h5>
                        <p>
                            Your privacy is important to us. Please refer to our Privacy Policy <Link to="/privacy"> Privacy </Link> to understand how we collect, use, and safeguard your information.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Disclaimer of Warranties </h5>
                        <p>
                            We do not make any warranties about the products purchased through our affiliate links. The products are provided by third-party merchants, and any issues should be addressed with the respective merchant.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'>Limitation of Liability </h5>
                        <p>
                            We are not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of our affiliate links.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Changes to Terms and Conditions </h5>
                        <p>
                            We reserve the right to update or change these terms and conditions at any time without prior notice. It is your responsibility to review these terms periodically for changes.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Governing Law </h5>
                        <p>
                        These terms and conditions are governed by and construed in accordance with the laws of the government jurisdiction.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Contact Information

                        </h5>
                        <p>
                            If you have any questions or concerns about these terms and conditions, please contact us at :- secretsavingproduct@gmail.com

                        </p>
                    </section>



                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TermsandCondition