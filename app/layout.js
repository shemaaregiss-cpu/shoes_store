import "./globals.css";
import Link from "next/link"; 

export const metadata = {
  title: "SHEMA KICKS STORE",
  description: "Find the best kicks here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
        This flexbox layout forces the footer to stick cleanly to the bottom 
        of the browser viewport on EVERY sub-page, regardless of folder depth!
      */}
      <body style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        margin: '0px',
        backgroundColor: '#ffffff'
      }}>
        
        {/* 1. Global Navigation Header Bar */}
        <header style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '15px 5%', 
          borderBottom: '1px solid #eaeaea',
          position: 'sticky',
          top: 0,
          background: 'white',
          zIndex: 100
        }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: '1.3rem', textDecoration: 'none', color: '#1a1a1a' }}>
            👟 SHEMA KICKS STORE
          </Link>
          
          <nav>
            {/* These paths correctly point to where your sub-page files live inside components */}
            <Link href="/" style={{ margin: '0 15px', textDecoration: 'none', color: '#1a1a1a', fontWeight: 500 }}>Home</Link>
            <Link href="/components/browse" style={{ margin: '0 15px', textDecoration: 'none', color: '#1a1a1a', fontWeight: 500 }}>Browse</Link>
            <Link href="/components/about" style={{ margin: '0 15px', textDecoration: 'none', color: '#1a1a1a', fontWeight: 500 }}>About</Link>
            <Link href="/components/contact" style={{ margin: '0 15px', textDecoration: 'none', color: '#1a1a1a', fontWeight: 500 }}>Contact</Link>
          </nav>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <input 
              type="text" 
              placeholder="Search..." 
              style={{ padding: '8px 16px', border: '1px solid #eaeaea', borderRadius: '20px', background: '#f9f9f9', outline: 'none' }} 
            />
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: 'white', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
              WhatsApp
            </a>
          </div>
        </header>
        
        {/* 2. Main Sub-Page Rendering Target Frame */}
        <main style={{ flexGrow: 1, width: '100%' }}>
          {children}
        </main>

        {/* 3. Global Responsive Footer */}
        <footer style={{
          backgroundColor: '#111111',
          color: '#ffffff',
          padding: '40px 5% 20px 5%',
          borderTop: '1px solid #222222',
          marginTop: '60px',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', fontWeight: '700' }}>SHEMA KICKS</h3>
              <p style={{ color: '#aaa', fontSize: '0.85rem', lineHeight: '1.6' }}>
                Your premium destination for authentic sneakers custom footwear, and modern street style.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '15px', fontWeight: '600', color: '#e91e63' }}>Shop</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link href="/components/browse" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>All Sneakers</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Featured Collection</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '15px', fontWeight: '600', color: '#e91e63' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link href="/components/about" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>About Us</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/components/contact" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.85rem' }}>Contact & Location</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '15px', fontWeight: '600', color: '#e91e63' }}>Connect</h4>
              <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '12px' }}>Have questions about sizes? Chat with us instantly.</p>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={{ 
                display: 'inline-block',
                backgroundColor: '#25D366', 
                color: 'white', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                textDecoration: 'none', 
                fontSize: '0.85rem', 
                fontWeight: '600' 
              }}>
                💬 WhatsApp Order Line
              </a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #222222', paddingTop: '20px', textAlign: 'center', color: '#666', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} SHEMA Kicks. All rights reserved. 
          </div>
        </footer>

      </body>
    </html>
  );
}
