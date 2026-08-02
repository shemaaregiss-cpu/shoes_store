"use client";

import Image from "next/image";
import styles from "./page.module.css"; 

export default function BrowsePageFromComponents() {
  // Complete product dataset accurately matching your store inventory images
  const products = [
    { id: 1, src: "/airforce1.jpg", title: "Timberland Premium 6-Inch Waterproof Boots in the iconic wheat colorway...", price: "70,000 RWF", onSale: false },
    { id: 2, src: "/airforce7.jpg", title: "Adidas Ozmillen Sneakers in a beige and lilac colorway", price: "38,000 RWF", onSale: false },
    { id: 3, src: "/airforce3.jpg", title: "Nike vomero 5 white", price: "38,000 RWF", onSale: false },
    { id: 4, src: "/airforce4.jpg", title: "Crocs black customized with charms", price: "22,000 RWF", onSale: false },
    { id: 5, src: "/airforce5.jpg", title: "Nike Victori One Slides featuring a prominent white swoosh logo", price: "22,000 RWF", onSale: false },
    { id: 6, src: "/airforce6.jpg", title: "Nike Air Jordan 1 Low sneakers in the 'Wolf Grey' colorway featuring a white leather...", price: "33,000 RWF", onSale: false },
    { id: 7, src: "/airforce7.jpg", title: "Nike Shox TL sneakers in the Metallic Platinum and Pink Foam colorway", price: "45,000 RWF", onSale: false },
    { id: 8, src: "/airforce8.jpg", title: "Adidas Handball Spezial shoes with white stripes", price: "33,000 RWF", onSale: false },
    { id: 9, src: "/airforce1.jpg", title: "Premium Kicks Model 09 Special Edition", price: "45,000 RWF", onSale: true }, // Emulates row 3 items from screenshot
    { id: 10, src: "/airforce6.jpg", title: "Classic Athletic Sneaker Silhouette", price: "35,000 RWF", onSale: true }
  ];

  return (
    <main className={styles.container}>
      <div className={styles.productsGrid}>
        {products.map((product) => {
          const encodedText = encodeURIComponent(`Hello! I want to order "${product.title}" listed for ${product.price}. Is it available?`);
          const whatsappUrl = `https://wa.me{encodedText}`;

          return (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={product.src} 
                  alt={product.title} 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.productImage}
                  loading="lazy"
                />
                
                {/* 🏷️ SALE BADGE OVERLAY */}
                {product.onSale && (
                  <span className={styles.saleBadge}>SALE</span>
                )}

                {/* Wishlist Icon */}
                <button className={styles.favoriteBtn}>🤍</button>
              </div>

              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <div className={styles.productPrice}>{product.price}</div>
                
                {/* 💬 RED ORDER BUTTON */}
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className={styles.orderBtn}>
                  <span className={styles.orderIcon}>💬</span> Order on WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
