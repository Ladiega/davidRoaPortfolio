'use client'
import React, { useState } from "react"
import Overlay from "../overlay/overlay"

export default function UxGallery() {

  const [overlayOpen, setOverlayOpen] = useState(false);

  const showOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  }

  return (
    <section className="uxgallery_container">

      <div className='card_container' onClick={showOverlay}>
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
      <div className='card_container' onClick={showOverlay}>
        <Overlay isOpen={overlayOpen} onClose={closeOverlay} />
      </div>
    </section>
  )
}