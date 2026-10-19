import { useState } from 'react';
import { Mail, Phone, Copy, Check, MessageSquare } from 'lucide-react';

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
    <section id="kontakt" className="contact-card-container" aria-labelledby="contact-title">
      <div className="contact-badge-title">
        <MessageSquare size={20} style={{ color: 'var(--accent-color)' }} />
        <h2 id="contact-title">Kontakt meg</h2>
      </div>
      <p>
        Har du spørsmål, ønsker samarbeid eller vil diskutere et prosjekt?
        Ta gjerne kontakt via e-post eller telefon!
      </p>

      <div className="contact-grid">
        {/* Email Card */}
        <div className="contact-item-card">
          <div className="contact-item-header">
            <div className="contact-icon-wrapper" aria-hidden="true">
              <Mail size={22} />
            </div>
            <div>
              <span className="contact-item-label">E-post</span>
              <a href={`mailto:${email}`} className="contact-item-value" title={`Send e-post til ${email}`}>
                {email}
              </a>
            </div>
          </div>
          <div className="contact-actions-row">
            <a href={`mailto:${email}`} className="btn-contact-action">
              <span>Send e-post</span>
            </a>
            <button
              type="button"
              className="btn-contact-copy"
              onClick={() => copyToClipboard(email, 'email')}
              title="Kopier e-postadresse"
              aria-label="Kopier e-postadresse"
            >
              {copiedEmail ? <Check size={16} style={{ color: '#16a34a' }} /> : <Copy size={16} />}
              <span>{copiedEmail ? 'Kopiert!' : 'Kopier'}</span>
            </button>
          </div>
        </div>

        {/* Phone Card */}
        <div className="contact-item-card">
          <div className="contact-item-header">
            <div className="contact-icon-wrapper" aria-hidden="true">
              <Phone size={22} />
            </div>
            <div>
              <span className="contact-item-label">Telefon</span>
              <a href={`tel:${phone}`} className="contact-item-value" title={`Ring ${formattedPhone}`}>
                {formattedPhone}
              </a>
            </div>
          </div>
          <div className="contact-actions-row">
            <a href={`tel:${phone}`} className="btn-contact-action">
              <span>Ring meg</span>
            </a>
            <button
              type="button"
              className="btn-contact-copy"
              onClick={() => copyToClipboard(phone, 'phone')}
              title="Kopier telefonnummer"
              aria-label="Kopier telefonnummer"
            >
              {copiedPhone ? <Check size={16} style={{ color: '#16a34a' }} /> : <Copy size={16} />}
              <span>{copiedPhone ? 'Kopiert!' : 'Kopier'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
