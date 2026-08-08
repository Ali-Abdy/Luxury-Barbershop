import { ImageResponse } from 'next/og';

export const alt = 'Luxury Barbershop - Premium Grooming';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #b45309',
        }}
      >
        <div style={{ color: '#b45309', fontSize: 72, fontWeight: 'bold' }}>LUXURY BARBERSHOP</div>
        <div style={{ color: '#ffffff', fontSize: 36, marginTop: 20 }}>Premium Grooming Experience</div>
      </div>
    ),
    { ...size }
  );
}
