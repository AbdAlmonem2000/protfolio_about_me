'use client';

import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ImSpinner2 } from 'react-icons/im';

export default function Contact() {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 
    emailjs
      .sendForm(
        'service_bn831oo',
        'template_idrkvvi',
        form.current,
        'M6ejWvi6OcjsdaK8a'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMsg('Message sent successfully ✅');
          setErrorMsg('');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setErrorMsg('An error occurred while sending ❌');
          setSuccessMsg('');
        }
      )
      .finally(() => setLoading(false)); 
  };

  return (
    <section className=" py-20 px-4 md:px-10 " id="contact">
      


      
      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start ">

        {/* Left: Info */}
        <div className="bg-purple-600 rounded-lg shadow-2xl text-white  py-11 flex flex-col items-center " data-aos="zoom-in" data-aos-duration="700">
          <h3 className="text-2xl font-bold mb-6">Find Me ↷</h3>

          <div className="flex items-center font-bold gap-3 mb-4">
            <FaEnvelope />
            <p>
              3bodahmed2000@gmail.com
            </p>
          </div>

          <div className="flex items-center font-bold gap-2 mb-2">
            <a href="tel:+201116008738"><FaPhoneAlt className='hover:-translate-y-0.5 transition-all' /></a>
            <a href="https://wa.me/201116008738" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100"><FaWhatsapp className='hover:-translate-y-0.5 transition-all' /></a>
            <p>+20 111 600 8738</p>
          </div>

          <div className="flex items-center font-bold gap-2">
            <a href="tel:+966538259830"><FaPhoneAlt className='hover:-translate-y-0.5 transition-all' /></a>
            <a href="https://wa.me/966538259830" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100"><FaWhatsapp className='hover:-translate-y-0.5 transition-all' /></a>
            <p>+966 53 825 9830</p>
          </div>
        </div>

 
        <form ref={form} onSubmit={sendEmail} className="space-y-4 shadow-2xl p-3 rounded-md  " >
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:bg-purple-50"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:bg-purple-50"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:bg-purple-50"
            required
          />
          <button type="submit" disabled={loading} className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-md flex items-center gap-2">
            {loading ? (
              <>
                <ImSpinner2 className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send <FaPaperPlane />
              </>
            )}
          </button>

          {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}
          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
        </form>
        {/* Right: Form */}


      </div>

    </section>
  );
}
