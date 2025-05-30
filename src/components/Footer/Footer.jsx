import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2025 MUED Design System</p>
        </div>
        
        <div className="footer-center">
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
        </div>
        
        <div className="footer-right">
          <a href="/products" className="footer-link">
            Our Product
          </a>
        </div>
      </div>
      
      <div className="footer-accent"></div>
    </footer>
  )
}

export default Footer
