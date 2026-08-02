"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const trendingProducts = [
    { id: 1, src: "/airforce1.jpg", title: "Timberland Premium 6-Inch Waterproof Boots in the iconic wheat colorway", price: "70,000 RWF" },
    { id: 2, src: "/airforce5.jpg", title: "Adidas Ozmillen Sneakers in a beige and lilac colorway", price: "38,000 RWF" },
    { id: 3, src: "/airforce3.jpg", title: "Nike Vomero 5 white running sneakers", price: "38,000 RWF" },
    { id: 4, src: "/airforce4.jpg", title: "Crocs black customized with charms", price: "22,000 RWF" }
  ];

  return (
    <div className={styles.mainWrapper}>
      
      {/* 🌟 1. HERO HEADER SECTION LAYER */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image 
            src="/airforce1.jpg" 
            alt="Moving Showcase Shoe Asset" 
            fill
            priority
            className={styles.welcomeHeroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Premium Footwear Destination</span>
          <h1 className={styles.heroTitle}>
            STEP INTO YOUR <span className={styles.highlightText}>TRUE STYLE</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Explore the finest selection of premium, authentic sneakers delivered instantly right to your doorstep across Rwanda.
          </p>
          <div className={styles.heroActionButtons}>
            <Link href="/components/browse" className={styles.primaryBtn}>
              Explore Collection 👟
            </Link>
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.secondaryBtn}
            >
              Order via WhatsApp 💬
            </a>
          </div>
        </div>
      </section>

      {/* 🚀 2. TRUST-BUILDING INFRASTRUCTURE STRIP */}
      

      {/* 🔥 3. TRENDING COLLECTION PRODUCT CARDS BLOCK */}
      <section className={styles.trendingSection}>
        <div className={styles.sectionHeaderContainer}>
          <div>
            <h2 className={styles.sectionTitle}>Trending This Week</h2>
            <p className={styles.sectionSub}>The absolute hottest items flying out of our inventory right now.</p>
          </div>
          <Link href="/component/browse" className={styles.viewAllLink}>View Full Inventory →</Link>
        </div>

        <div className={styles.productsGrid}>
          {trendingProducts.map((product) => {
            const encodedText = encodeURIComponent(`Hello! I want to order the trending "${product.title}" (${product.price}) from your landing page.`);
            const dynamicWhatsAppLink = `https://wa.me?text=${encodedText}`;

            return (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={product.src} 
                    alt={product.title} 
                    fill 
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover" }} 
                  />
                  <button className={styles.favoriteBtn}>🤍</button>
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <div className={styles.productPrice}>{product.price}</div>
                  <a href={dynamicWhatsAppLink} target="_blank" rel="noopener noreferrer" className={styles.orderBtn}>
                    💬 Order on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
