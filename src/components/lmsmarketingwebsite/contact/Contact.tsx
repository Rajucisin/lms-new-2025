'use client'
import React from 'react'
import Link from 'next/link'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';


const Contact = () => {
  return (
    <div className='sec-contact-us-main bg-darker sec-gap'>
      <div className='container max-container'>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>

        <div className='page-header'>
          <h2 className='page-title'>Contact Support
          </h2>
          <p> Have a question or need help? Our support team is here for you.
          </p>
        </div>

        <div className='row'>
          <div className='col-md-7 contact-form'>
            <Form>
              <div className='row'>
                <div className='col-md-6'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </div>
                <div className='col-md-6'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </div>
                <div className='col-md-12'>
                  <Form.Label>Message
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </div>
              </div>


            </Form>

            <button className='btn-theme btn-yellow'>Send Message</button>
          </div>
          <div className='col-md-5'>
            <div className='step-card h-auto'>
              <div className='step-card-item'>
                <div className='d-flex'>
                  <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" fill='currentColor'/></svg>
                  </div>
                  <div className='flex-grow-1'>
                    <p className='text-uppercase'>Support Email</p>
                    <p><Link href="mailto:support@lmspuntersclub.com">support@lmspuntersclub.com
                    </Link></p>
                  </div>
                </div>
                <div className='d-flex'>
                  <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" fill='currentColor'/></svg>
                  </div>
                  <div className='flex-grow-1'>
                    <p className='text-uppercase'>Response Time</p>
                    <p>We aim to reply within <span>24 hours</span>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
