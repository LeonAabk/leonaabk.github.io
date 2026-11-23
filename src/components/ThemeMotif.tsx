import { Motif } from '../data/projects';

// Små, dempede mønstre øverst på hvert prosjektkort. Tegnes med currentColor,
// så fargen kommer fra prosjektets tema (--accent).
export function ThemeMotif({ motif }: { motif: Motif }) {
  const common = {
    className: 'theme-motif',
    viewBox: '0 0 200 80',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
    preserveAspectRatio: 'xMaxYMid meet',
  };

  switch (motif) {
    case 'rails':
      return (
        <svg {...common} strokeWidth={1.6}>
          <path d="M20 66 C 80 66, 120 30, 200 22" />
          <path d="M20 80 C 86 80, 128 44, 200 38" />
          {Array.from({ length: 11 }, (_, i) => {
            const t = i / 10;
            const x = 26 + t * 168;
            const y1 = 66 - t * 44 + Math.sin(t * Math.PI) * 4;
            return <path key={i} d={`M${x} ${y1 - 4} L${x + 2} ${y1 + 18}`} strokeWidth={1.2} />;
          })}
        </svg>
      );
    case 'grid':
      return (
        <svg {...common} strokeWidth={0.8}>
          {Array.from({ length: 9 }, (_, i) => <path key={`v${i}`} d={`M${96 + i * 13} 0 V80`} />)}
          {Array.from({ length: 6 }, (_, i) => <path key={`h${i}`} d={`M96 ${6 + i * 13} H200`} />)}
          <path d="M96 70 C 120 70, 130 20, 150 30 S 180 64, 200 12" strokeWidth={2} />
        </svg>
      );
    case 'route':
      return (
        <svg {...common} strokeWidth={1.6}>
          <path d="M40 64 C 90 64, 100 22, 140 28 S 176 46, 184 30" strokeDasharray="2 6" />
          <circle cx="40" cy="64" r="4" />
          <path d="M184 8 c -6 0 -9 4 -9 8 c 0 6 9 14 9 14 s 9 -8 9 -14 c 0 -4 -3 -8 -9 -8 z" /><circle cx="184" cy="16" r="2.5" />
        </svg>
      );
    case 'spice':
      return (
        <svg {...common} strokeWidth={1.4}>
          {[
            [90, 18, 3], [108, 40, 2], [126, 14, 2.5], [140, 52, 3.5], [156, 26, 2], [186, 40, 2.5],
            [100, 64, 2], [118, 70, 3], [170, 10, 1.8], [190, 20, 3], [132, 34, 1.6], [84, 46, 1.8],
          ].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} />)}
          <path d="M168 64 c 6 -10 14 -12 20 -10 c -2 8 -10 12 -20 10 z" />
        </svg>
      );
    case 'network':
      return (
        <svg {...common} strokeWidth={1.4}>
          <path d="M100 54 L128 24 L160 44 L188 16 M128 24 L138 66 L160 44 M100 54 L138 66" />
          {[[100, 54], [128, 24], [160, 44], [188, 16], [138, 66]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={4.5} />
          ))}
        </svg>
      );
    case 'menu':
      return (
        <svg {...common} strokeWidth={1.4}>
          {[18, 38, 58].map((y, i) => (
            <g key={i}>
              <path d={`M100 ${y} H${132 + (i % 2) * 10}`} strokeWidth={2} />
              <path d={`M${140 + (i % 2) * 10} ${y} H182`} strokeDasharray="1 5" />
              <path d={`M188 ${y} H198`} strokeWidth={2} />
            </g>
          ))}
        </svg>
      );
    case 'redirect':
      return (
        <svg {...common} strokeWidth={1.6}>
          <path d="M90 42 H134 C 154 42, 158 20, 178 20 H190" />
          <path d="M134 42 C 154 42, 158 62, 178 62 H190" />
          <path d="M184 14 L191 20 L184 26 M184 56 L191 62 L184 68" />
          <circle cx="90" cy="42" r="4" />
        </svg>
      );
    case 'nfc':
      return (
        <svg {...common} strokeWidth={1.6}>
          {[10, 20, 30, 40].map((r, i) => (
            <path key={i} d={`M${170 - r * 0.2} ${40 - r} A ${r} ${r} 0 0 1 ${170 - r * 0.2} ${40 + r}`} />
          ))}
          <rect x="122" y="26" width="20" height="28" rx="4" />
        </svg>
      );
  }
}
