import { useState } from 'react';
import { Copy, Check, ExternalLink, QrCode } from 'lucide-react';

export function VippsSection() {
  const [copied, setCopied] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string>('100 kr');
  const [showQrZoom, setShowQrZoom] = useState(false);

  const vippsNumber = '9834BU';
  const vippsPaymentUrl = 'https://qr.vipps.no/box/fe53df96-3a3c-47e3-aa57-6ccfa96a2d96/pay-in';
  const presets = ['50 kr', '100 kr', '200 kr', 'Valgfritt'];

  const handleCopyNumber = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(vippsNumber)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2200);
        })
        .catch(() => {});
    }
  };

  return (
    <section id="vipps" className="page-section" aria-labelledby="vipps-title">
      <div className="section-header-row">
        <div className="section-title-group">
          <span className="section-index">04</span>
          <div>
            <h2 id="vipps-title" className="section-heading">Støtt med Vipps</h2>
            <p className="section-subtitle">
              Frivillig bidrag til videre utvikling og drift av de åpne verktøyene på siden.
            </p>
          </div>
        </div>
      </div>

      <div className="vipps-split-panel">
        <div className="vipps-content-col">
          <h3 className="panel-heading">Bidra til nye verktøy og oppdateringer</h3>
          <p className="panel-body-text">
            De private verktøyene på denne siden er åpne, gratis og uten reklame. Hvis du har hatt nytte av et verktøy og ønsker å støtte videre arbeid, kan du sende et valgfritt beløp på Vipps.
          </p>

          <div className="vipps-presets-block">
            <span className="vipps-small-label">Forslag til beløp</span>
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

          <div className="vipps-actions-row">
            <a
              href={vippsPaymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vipps"
            >
              <span>Åpne i Vipps</span>
              <ExternalLink size={15} strokeWidth={2} />
            </a>

            <button
              type="button"
              className="vipps-code-pill"
              onClick={handleCopyNumber}
              title="Klikk for å kopiere Vipps-nummer"
              aria-label={`Kopier Vipps-nummer ${vippsNumber}`}
            >
              <span className="vipps-code-prefix">Vipps #</span>
              <span className="vipps-code-value">{vippsNumber}</span>
              {copied ? (
                <Check size={15} strokeWidth={2.2} style={{ color: '#15803d' }} />
              ) : (
                <Copy size={14} strokeWidth={1.8} />
              )}
            </button>
          </div>

          {copied && (
            <p className="vipps-copied-feedback">
              Vipps-nummer {vippsNumber} er kopiert til utklippstavlen.
            </p>
          )}
        </div>

        <div className="vipps-qr-col">
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
              alt="Vipps QR-kode for 9834BU"
              className="vipps-qr-img"
              style={{
                transform: showQrZoom ? 'scale(1.22)' : 'scale(1)',
                transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              width={136}
              height={136}
            />
          </div>
          <p className="vipps-help-text">
            <QrCode size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '5px' }} />
            Skann med kamera eller Vipps
          </p>
        </div>
      </div>
    </section>
  );
}
