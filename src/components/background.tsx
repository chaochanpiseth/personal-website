const elements = [
  { type: 'jelly', x: 8,  y: 5,  scale: 1.1, delay: 0,   dur: 5.2 },
  { type: 'star',  x: 28, y: 3,  scale: 0.7, delay: 0.8, dur: 4.5 },
  { type: 'jelly', x: 72, y: 2,  scale: 1.3, delay: 1.2, dur: 6.0 },
  { type: 'heart', x: 55, y: 8,  scale: 0.8, delay: 0.4, dur: 4.8 },
  { type: 'star',  x: 88, y: 12, scale: 0.6, delay: 2.0, dur: 5.5 },
  { type: 'jelly', x: 18, y: 22, scale: 0.9, delay: 1.5, dur: 5.8 },
  { type: 'heart', x: 42, y: 18, scale: 0.6, delay: 0.9, dur: 4.2 },
  { type: 'star',  x: 65, y: 20, scale: 0.9, delay: 1.8, dur: 5.0 },
  { type: 'jelly', x: 82, y: 28, scale: 1.0, delay: 0.3, dur: 6.2 },
  { type: 'heart', x: 10, y: 38, scale: 0.7, delay: 2.2, dur: 4.6 },
  { type: 'star',  x: 35, y: 35, scale: 0.8, delay: 0.6, dur: 5.3 },
  { type: 'jelly', x: 58, y: 40, scale: 1.2, delay: 1.1, dur: 5.7 },
  { type: 'heart', x: 78, y: 45, scale: 0.5, delay: 1.7, dur: 4.3 },
  { type: 'star',  x: 92, y: 38, scale: 0.7, delay: 0.2, dur: 5.9 },
  { type: 'jelly', x: 5,  y: 55, scale: 0.8, delay: 2.5, dur: 5.4 },
  { type: 'heart', x: 25, y: 52, scale: 0.9, delay: 1.3, dur: 4.7 },
  { type: 'star',  x: 48, y: 58, scale: 0.6, delay: 0.7, dur: 5.1 },
  { type: 'jelly', x: 70, y: 60, scale: 1.0, delay: 2.1, dur: 6.3 },
  { type: 'heart', x: 88, y: 55, scale: 0.6, delay: 1.6, dur: 4.4 },
  { type: 'star',  x: 15, y: 70, scale: 0.8, delay: 0.5, dur: 5.6 },
  { type: 'jelly', x: 38, y: 72, scale: 0.9, delay: 1.9, dur: 5.2 },
  { type: 'heart', x: 60, y: 75, scale: 0.7, delay: 0.1, dur: 4.9 },
  { type: 'star',  x: 82, y: 70, scale: 1.0, delay: 2.3, dur: 5.5 },
  { type: 'jelly', x: 5,  y: 85, scale: 0.7, delay: 1.4, dur: 6.1 },
  { type: 'heart', x: 30, y: 88, scale: 0.5, delay: 0.8, dur: 4.1 },
  { type: 'star',  x: 52, y: 90, scale: 0.7, delay: 2.4, dur: 5.3 },
  { type: 'jelly', x: 75, y: 88, scale: 1.1, delay: 0.6, dur: 5.8 },
  { type: 'heart', x: 93, y: 82, scale: 0.8, delay: 1.0, dur: 4.5 },
];

function Jellyfish({ scale }: { scale: number }) {
  const s = scale * 38;
  return (
    <svg width={s} height={s * 1.2} viewBox="0 0 60 72" fill="none">
      <ellipse cx="30" cy="26" rx="22" ry="18" fill="rgba(236,72,153,0.18)" stroke="rgba(196,30,113,0.35)" strokeWidth="1.5"/>
      <ellipse cx="30" cy="30" rx="14" ry="10" fill="rgba(255,182,220,0.22)"/>
      <circle cx="23" cy="24" r="2.5" fill="rgba(160,20,90,0.7)"/>
      <circle cx="37" cy="24" r="2.5" fill="rgba(160,20,90,0.7)"/>
      <path d="M25 30 Q27 32 29 30 Q31 28 33 30 Q35 32 37 30" stroke="rgba(196,30,113,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M20 44 Q21 52 20 60" stroke="rgba(196,30,113,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M24 44 Q26 54 24 64" stroke="rgba(196,30,113,0.35)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M28 44 Q29 55 28 66" stroke="rgba(196,30,113,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M32 44 Q33 55 32 64" stroke="rgba(196,30,113,0.35)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M36 44 Q37 52 36 60" stroke="rgba(196,30,113,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M40 44 Q42 51 40 58" stroke="rgba(196,30,113,0.3)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function StarFish({ scale }: { scale: number }) {
  const s = scale * 34;
  return (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none">
      <path
        d="M30 4 L35 22 L54 22 L39 33 L44 52 L30 41 L16 52 L21 33 L6 22 L25 22 Z"
        fill="rgba(236,72,153,0.22)"
        stroke="rgba(196,30,113,0.38)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="30" r="2" fill="rgba(160,20,90,0.65)"/>
      <circle cx="37" cy="30" r="2" fill="rgba(160,20,90,0.65)"/>
      <path d="M26 35 Q30 38 34 35" stroke="rgba(196,30,113,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function Heart({ scale }: { scale: number }) {
  const s = scale * 28;
  return (
    <svg width={s} height={s} viewBox="0 0 50 46" fill="none">
      <path
        d="M25 42 C25 42 4 28 4 15 C4 8 10 3 17 5 C20 6 23 9 25 12 C27 9 30 6 33 5 C40 3 46 8 46 15 C46 28 25 42 25 42Z"
        fill="rgba(236,72,153,0.2)"
        stroke="rgba(196,30,113,0.35)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {elements.map((el, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            animation: `cute-float ${el.dur}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
          }}
        >
          {el.type === 'jelly' && <Jellyfish scale={el.scale} />}
          {el.type === 'star'  && <StarFish  scale={el.scale} />}
          {el.type === 'heart' && <Heart     scale={el.scale} />}
        </div>
      ))}
    </div>
  );
}
