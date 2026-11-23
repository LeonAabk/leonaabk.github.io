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
          <path d="M60 64 C 100 64, 110 18, 150 26 S 186 46, 196 20" strokeDasharray="2 6" />
          <circle cx="60" cy="64" r="4" />
          <path d="M196 12 c -6 0 -9 4 -9 8 c 0 6 9 14 9 14 s 9 -8 9 -14 c 0 -4 -3 -8 -9 -8 z" />
        </svg>
      );
    case 'spice':
      return (
        <svg {...common} strokeWidth={1.4}>
          {[
            [110, 18, 3], [128, 40, 2], [146, 14, 2.5], [160, 52, 3.5], [176, 26, 2], [190, 60, 2.5],
            [120, 64, 2], [138, 70, 3], [170, 8, 1.8], [196, 34, 3], [150, 34, 1.6], [104, 46, 1.8],
          ].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} />)}
          <path d="M176 66 c 6 -10 14 -12 20 -10 c -2 8 -10 12 -20 10 z" />
        </svg>
      );
    case 'network':
      return (
        <svg {...common} strokeWidth={1.4}>
          <path d="M112 54 L140 24 L172 44 L196 16 M140 24 L150 66 L172 44 M112 54 L150 66" />
          {[[112, 54], [140, 24], [172, 44], [196, 16], [150, 66]].map(([x, y], i) => (
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
          <path d="M96 42 H140 C 160 42, 164 20, 184 20 H196" />
          <path d="M140 42 C 160 42, 164 62, 184 62 H196" />
          <path d="M190 14 L197 20 L190 26 M190 56 L197 62 L190 68" />
          <circle cx="96" cy="42" r="4" />
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
