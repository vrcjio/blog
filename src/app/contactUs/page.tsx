'use client'
import Footer from '@/componets/footer'
import TopBar from '@/componets/topbar'
import React from 'react';

function ContactUs() {

  const sound = '@/sounds/success_sound.mp3';

  const playSound = async () => {
    const audio = new Audio(sound);
    audio.play();
  }


  return (
    <>
      <TopBar />
      <div>ContactUs</div>
      <button className='btn btn-info mx-3' onClick={() => (playSound())}>Play Sound</button>
      <Footer />
    </>
  );
}

export default ContactUs;
