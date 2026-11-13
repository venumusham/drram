import React from 'react';

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export interface WhatsappLinkProps extends AnchorProps {
  /** The wa.me link, including any prefilled message. */
  href: string;
  /** Identifies the CTA, e.g. 'Hero WhatsApp'. Rendered as data-cta. */
  formType: string;
  /** The procedure the CTA is about, e.g. 'Gynecomastia'. Rendered as data-condition. */
  condition?: string;
  children: React.ReactNode;
}

/**
 * A plain WhatsApp `<a>`. Click tracking is handled site-wide by the DecentCare
 * script loaded once in index.html; the data attributes label which CTA it was.
 */
const WhatsappLink: React.FC<WhatsappLinkProps> = ({
  href,
  formType,
  condition,
  children,
  ...anchorProps
}) => (
  <a href={href} data-cta={formType} data-condition={condition} {...anchorProps}>
    {children}
  </a>
);

export default WhatsappLink;
