import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Bladidz.com — Bientôt Disponible'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#011a14',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: brand name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: '#a6e39d',
            }}
          />
          <span
            style={{
              color: '#ffffff',
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: '-0.5px',
            }}
          >
            Bladidz.com
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span
            style={{
              color: '#ffffff',
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-3px',
            }}
          >
            Bientôt
          </span>
          <span
            style={{
              color: '#a6e39d',
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-3px',
            }}
          >
            Disponible
          </span>
        </div>

        {/* Bottom: tagline + date */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              color: '#a6e39d',
              opacity: 0.7,
              fontSize: 24,
              maxWidth: 600,
              lineHeight: 1.5,
            }}
          >
            L'écosystème complet du retour pour la diaspora algérienne.
          </span>
          <span style={{ color: '#a6e39d', fontSize: 22, opacity: 0.5 }}>
            5 juillet 2026
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
