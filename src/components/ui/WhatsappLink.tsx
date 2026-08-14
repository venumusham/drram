import React from 'react';
import { useWhatsappCta } from '../../hooks/useWhatsappCta';

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'>;

export interface WhatsappLinkProps extends AnchorProps {
  /**
   * The plain wa.me link. Kept as the real href so the CTA still works without
   * JS, survives right-click/open-in-new-tab, and is the fallback if the Care
   * Console call fails.
   */
  href: string;
  /** Identifies the CTA in the CRM, e.g. 'Hero WhatsApp'. */
  formType: string;
  /** Overrides the condition derived from the URL, e.g. 'Gynecomastia'. */
  condition?: string;
  children: React.ReactNode;
}

/**
 * Drop-in replacement for a WhatsApp `<a>`: renders the same markup, but a click
 * logs the lead in Care Console and redirects to the tracked link it returns.
 */
const WhatsappLink: React.FC<WhatsappLinkProps> = ({
  href,
  formType,
  condition,
  children,
  ...anchorProps
}) => {
  const { trigger } = useWhatsappCta();

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Let modified clicks (new tab/window, middle click) use the plain href.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    event.preventDefault();
    trigger({ formType, condition, fallbackLink: href });
  };

  return (
    <a href={href} onClick={onClick} {...anchorProps}>
      {children}
    </a>
  );
};

export default WhatsappLink;
