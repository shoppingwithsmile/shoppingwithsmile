import React from 'react'
import Footer from '../Footer/Footer'

const Privacy = () => {
    return (
        <div>
            <div className='container'>
                {/* <Headers /> */}

                <div className="terms-and-conditions">
                    <h1 className='title text-center'>Terms and Conditions</h1>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Information We Collect </h5>
                        <p className='common_description'>
                            We collect personal information such as your name, email address, and payment details when you make a purchase through our affiliate links. We may also collect non-personal information like your IP address for analytical purposes.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> How We Use Your Information </h5>
                        <p className='common_description'>
                        We use your information to facilitate your purchase, send order updates, improve our website, and analyze trends.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Sharing Your Information </h5>
                        <p className='common_description'>
                        We share your information with our affiliate partners to process your purchase and with service providers who assist in running our website.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Security </h5>
                        <p className='common_description'>
                        We take reasonable measures to protect your information, but we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Cookies and Tracking Technologies </h5>
                        <p className='common_description'>
                        We use cookies for a better user experience and for analytics. You can control cookies through your browser settings.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Your Choices </h5>
                        <p className='common_description'>
                        You can access and update your information, opt-out of marketing communications, and request deletion of your information.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Changes to This Privacy Policy </h5>
                        <p className='common_description'>
                        We may update this Privacy Policy. Check for changes on our website.
                        </p>
                    </section>

                    <section className='mt-4'>
                        <h5 className='sub_title text-start'> Contact Us </h5>
                        <p className='common_description'>
                        If you have any questions or concerns about these terms and conditions, please contact us at :- secretsavingproduct@gmail.com

                        </p>
                    </section>
                </div>

            </div>
                <Footer/>
        </div>
    )
}

export default Privacy