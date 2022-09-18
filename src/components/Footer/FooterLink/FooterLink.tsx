import React from 'react';
import Link from 'next/link';

interface FooterLinkProps {
  to: string;
  children?: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <Link href={to}>
      <a>{children}</a>
    </Link>
  );
};

export default FooterLink;
