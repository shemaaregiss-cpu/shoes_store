"use client";

import { useState } from "react";
import styles from "./page.module.css"; 

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formats a custom structured WhatsApp routing link from user values
    const encodedText = encodeURIComponent(
      `Hello Shema Kicks! \n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`
    );
    window.open(`https://wa.me{encodedText}`, "_blank");
  };

  return (
    <main className={styles.pageBackground}>
      <div className={styles.mainCanvasCard}>
        
        {/* 📷 LEFT PANEL: IMAGE BACKGROUND BACKDROP WITH OVERLAPPING INFOCARD */}
        <div className={styles.leftVisualSide}>
          {/* Using your local image asset background */}
          <div 
            className={styles.backgroundImageBackdrop} 
            style={{ backgroundImage: "url('/airforce1.jpg')" }}
          ></div>
          <div className={styles.imageOverlayDarkener}></div>

          {/* 📍 OVERLAPPING FLOAT INFORMATION BOX CARD */}
          <div className={styles.floatingInfoCard}>
            <div className={styles.infoBlockItem}>
              <div className={styles.iconCircle}>📍</div>
              <div>
                <h4>Location Hub</h4>
                <p>Kigali, Rwanda</p>
              </div>
            </div>
            
            <div className={styles.infoBlockItem}>
              <div className={styles.iconCircle}>📞</div>
              <div>
                <h4>Phone Line</h4>
                <p>+250 780 000 000</p>
              </div>
            </div>

            <div className={styles.infoBlockItem}>
              <div className={styles.iconCircle}>🕒</div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 8 AM - 8 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* 📝 RIGHT PANEL: CLEAN TEXT INPUT FORM FIELD BLOCK */}
        <div className={styles.rightFormSide}>
          <h2 className={styles.formMainHeading}>Contact Form</h2>
          
          <form onSubmit={handleSubmit} className={styles.interactiveFormStructure}>
            <div className={styles.inputFieldBlock}>
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                required
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleInputChange}
                className={styles.textInputElement}
              />
            </div>

            <div className={styles.inputFieldBlock}>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                required
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleInputChange}
                className={styles.textInputElement}
              />
            </div>

            <div className={styles.inputFieldBlock}>
              <label htmlFor="message">Comment or message</label>
              <textarea 
                id="message"
                name="message" 
                required
                rows="4"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textAreaElement}
              ></textarea>
            </div>

            <button type="submit" className={styles.formSubmitActionBtn}>
              Submit Message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
