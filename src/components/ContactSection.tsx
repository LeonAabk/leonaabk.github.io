import { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'leon.aabak@gmail.com';
  const phone = '94118086';
  const formattedPhone = '+47 941 18 086';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        if (type === 'email') {
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 2200);
        } else {
          setCopiedPhone(true);
          setTimeout(() => setCopiedPhone(false), 2200);
        }
      });
    }
  };

  return (
    <section id="kontakt" className="page-section" aria-labelledby="contact-title">
      <div className="section-header-row">
        <div className="section-title-group">
          <span className="section-index">03</span>
          <div>
            <h2 id="contact-title" className="section-heading">Kontakt meg</h2>
            <p className="section-subtitle">
              Spørsmål om NFC-kort til bedriften din, samarbeid eller tilbakemeldinger på et prosjekt.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-split-panel">
        <div className="contact-intro-col">
          <h3 className="panel-heading">Ta direkte kontakt</h3>
          <p className="panel-body-text">
            Enten du lurer på noe før en bestilling i nettbutikken, ønsker å høre mer om kommende bedriftsløsninger eller bare vil slå av en prat om et prosjekt, svarer jeg raskt på både e-post og telefon.
          </p>
          <p className="contact-signature">
            Leon Aabak · Aabak Studio
          </p>
        </div>

        <div className="contact-methods-col">
          {/* Email Row */}
          <div className="contact-row-card">
            <div className="contact-row-main">
              <div className="project-icon-box" aria-hidden="true">
                <Mail size={18} strokeWidth={1.75} />
              </div>
              <div>
                <span className="contact-item-label">E-post</span>
                <a href={`mailto:${email}`} className="contact-item-value">
                  {email}
                </a>
              </div>
            </div>

            <div className="contact-row-actions">
              <button
                type="button"
                className="btn-inline-copy"
                onClick={() => copyToClipboard(email, 'email')}
                aria-label="Kopier e-postadresse"
              >
                {copiedEmail ? <Check size={14} strokeWidth={2.2} /> : <Copy size={14} strokeWidth={1.8} />}
                <span>{copiedEmail ? 'Kopiert' : 'Kopier'}</span>
              </button>
              <a href={`mailto:${email}`} className="btn-inline-primary">
                <span>Send e-post</span>
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Phone Row */}
          <div className="contact-row-card">
            <div className="contact-row-main">
              <div className="project-icon-box" aria-hidden="true">
                <Phone size={18} strokeWidth={1.75} />
              </div>
              <div>
                <span className="contact-item-label">Telefon</span>
                <a href={`tel:${phone}`} className="contact-item-value">
                  {formattedPhone}
                </a>
              </div>
            </div>

            <div className="contact-row-actions">
              <button
                type="button"
                className="btn-inline-copy"
                onClick={() => copyToClipboard(phone, 'phone')}
                aria-label="Kopier telefonnummer"
              >
                {copiedPhone ? <Check size={14} strokeWidth={2.2} /> : <Copy size={14} strokeWidth={1.8} />}
                <span>{copiedPhone ? 'Kopiert' : 'Kopier'}</span>
              </button>
              <a href={`tel:${phone}`} className="btn-inline-primary">
                <span>Ring</span>
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
