import { useState } from 'react';
import { Copy, Check, Heart, ExternalLink, QrCode } from 'lucide-react';

export function VippsSection() {
  const [copied, setCopied] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string>('100 kr');
  const [showQrZoom, setShowQrZoom] = useState(false);

  const vippsNumber = '9834BU';
  const vippsPaymentUrl = 'https://qr.vipps.no/box/fe53df96-3a3c-47e3-aa57-6ccfa96a2d96/pay-in';
  const presets = ['50 kr', '100 kr', '200 kr', '500 kr', 'Valgfritt'];

  const handleCopyNumber = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(vippsNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }).catch(() => {
        // fallback
      });
    }
  };

  return (
    <section id="vipps" className="vipps-card-container" aria-labelledby="vipps-title">
      <div className="vipps-badge-title">
        <Heart size={20} style={{ color: 'var(--vipps-color)' }} fill="currentColor" />
        <h2 id="vipps-title">Støtt nye prosjekter</h2>
      </div>
      <p>
        Vil du bidra til utviklingen av nye funksjoner og prosjekter? Du kan enkelt
        donere et valgfritt beløp via Vipps!
      </p>

      {/* Preset Amount Selector */}
      <div className="vipps-presets-wrapper">
        <div className="vipps-presets-label">Velg et støttebeløp</div>
        <div className="vipps-presets-group" role="radiogroup" aria-label="Velg støttebeløp">
          {presets.map((preset) => (
            <button
              key={preset}
              type="button"
              role="radio"
              aria-checked={selectedPreset === preset}
              className={`vipps-preset-btn ${selectedPreset === preset ? 'selected' : ''}`}
              onClick={() => setSelectedPreset(preset)}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      <div className="vipps-container">
        {/* QR Section */}
        <div className="vipps-qr-section">
          <div
            className="vipps-qr-box"
            onClick={() => setShowQrZoom(!showQrZoom)}
            title="Klikk for å forstørre QR-koden"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setShowQrZoom(!showQrZoom);
              }
            }}
          >
            <img
              src="/vipps-qr.png"
              alt="Vipps QR kode for 9834BU"
              className="vipps-qr-img"
              style={{
                transform: showQrZoom ? 'scale(1.3)' : 'scale(1)',
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              width={140}
              height={140}
            />
          </div>
          <p className="vipps-help-text">
            <QrCode size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
            Skann koden med kameraet
          </p>
        </div>

        {/* Text and Copy Section */}
        <div className="vipps-text-section">
          <p>Eller bruk Vipps-nummer:</p>
          
          <button
            type="button"
            className="vipps-copy-trigger"
            onClick={handleCopyNumber}
            title="Klikk for å kopiere Vipps-nummer"
            aria-label={`Kopier Vipps-nummer ${vippsNumber}`}
          >
            <span className="vipps-number">{vippsNumber}</span>
            <span className="vipps-copy-icon">
              {copied ? <Check size={22} style={{ color: '#16a34a' }} /> : <Copy size={20} />}
            </span>
          </button>

          {copied && (
            <p
              style={{
                fontSize: '0.85rem',
                color: '#16a34a',
                marginTop: '-1rem',
                marginBottom: '1.25rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Check size={14} /> Kopiert til utklippstavlen!
            </p>
          )}

          <a
            href={vippsPaymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vipps"
          >
            <span>Åpne i Vipps</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
