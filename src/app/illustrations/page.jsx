'use client'
import React, { useState } from "react"


import OverlayIllustration from "../components/overlayillustration/overlayillustration"

export default function Illustration() {

  const [overlayOpen, setOverlayOpen] = useState(false);
  
  const showOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  return (
    <section className="illustration_gallery_contanier">

          <div className='card_container' onClick={showOverlay}>
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
          </div>
          <div className='card_container' onClick={showOverlay}>
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
          </div>
           <div className='card_container' onClick={showOverlay}>
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
         </div>
           <div className='card_container' onClick={showOverlay}>
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
         </div>
           <div className='card_container' onClick={showOverlay}>
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
           </div>
          <div className='card_container' onClick={showOverlay}>
        <OverlayIllustration isOpen={overlayOpen} onClose={closeOverlay} />
         </div>
         </section>
  )
}


