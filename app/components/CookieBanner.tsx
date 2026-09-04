'use client'
import { useState, useEffect } from 'react'
import Script from 'next/script'

const CONSENT_KEY = 'cookie_consent'
const GA_ID = 'G-ZMMEXF8MXS'

export default function CookieBanner() {
  const [consent, setConsent] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(CONSENT_KEY)
    setConsent(stored)
    // Already accepted in a previous visit — grant immediately
    if (stored === 'accepted') {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setConsent('declined')
  }

  return (
    <>
      {/* Always load — consent mode controls what's collected */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      {mounted && consent === null && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#1a1a1a',
          color: '#fff',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          zIndex: 9999,
          borderTop: '1px solid #333',
          flexWrap: 'wrap',
        }}>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
            This site uses Google Analytics to understand traffic.
            The app itself collects nothing.{' '}
            <a href="/en/privacy" style={{ color: '#aaa', textDecoration: 'underline' }}>
              Privacy policy
            </a>
          </p>
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <button
              onClick={decline}
              style={{
                background: 'transparent',
                border: '1px solid #555',
                color: '#aaa',
                padding: '6px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
              }}
            >
              Decline
            </button>
            <button
              onClick={accept}
              style={{
                background: '#fff',
                border: 'none',
                color: '#000',
                padding: '6px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
              }}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}
