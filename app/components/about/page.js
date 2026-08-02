"use client";

import styles from "./page.module.css"; 

export default function AboutPage() {
  const features = [
    { id: 1, icon: "⚡", title: "Instant Delivery", text: "Fast, tracked delivery straight to your doorstep anywhere across Rwanda." },
    { id: 2, icon: "🛡️", title: "Secured Quality", text: "100% hand-inspected, authentic premium sneakers guaranteed." },
    { id: 3, icon: "🤝", title: "Pay On Delivery", text: "Zero risk. Inspect your fresh kicks completely before you pay." },
    { id: 4, icon: "🌍", title: "Global Sourcing", text: "Bringing the world's most exclusive streetwear drops directly to Kigali." }
  ];

  return (
    <main className={styles.aboutWrapper}>
      
      {/* 🌟 CREATIVE BRAND INTRODUCTION */}
      <section className={styles.introSection}>
        <div className={styles.badge}>THE SHEMA STORY</div>
        <h1 className={styles.mainTitle}>
          WE DON&apos;T JUST SELL SNEAKERS. <br />
          WE DEFINE <span className={styles.pinkGradient}>STREET CULTURE.</span>
        </h1>
        <div className={styles.divider}></div>
        <p className={styles.heroDescription}>
          Duhire Kicks Store is Rwanda&apos;s premier destination for exclusive, authentic footwear. 
          We bridge the gap between global sneaker drops and local streetwear enthusiasts, ensuring you 
          never have to compromise on style, comfort, or quality.
        </p>
      </section>

      {/* 🎯 THE EMOTIONAL CORE / BRAND STATEMENT */}
      <section className={styles.quoteCard}>
        <span className={styles.quoteIcon}>“</span>
        <h2 className={styles.quoteText}>Where Every Step Tells a Story.</h2>
        <p className={styles.quoteSub}>Our mission is simple: To empower your journey with premium craftsmanship and unmistakable identity.</p>
      </section>

      {/* 🛠️ PREMIUM FEATURE MATRIX GRID */}
      <section className={styles.matrixContainer}>
        <div className={styles.matrixHeader}>
          <h2>Why Sneakerheads Choose Us</h2>
          <p>Setting the gold standard for footwear retail in Rwanda.</p>
        </div>

        <div className={styles.grid}>
          {features.map((item) => (
            <div key={item.id} className={styles.premiumCard}>
              <div className={styles.iconCircle}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
