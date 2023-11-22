'use client'

import React from 'react';

const Overlay = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={onClose}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>X</button>
            <h2>Content Overlay</h2>
            <p> Photo content.</p>

          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;