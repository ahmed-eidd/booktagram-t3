import React from 'react';
import Link from 'next/link';

const FooterLink = ({ to, children }) => {
  return (
    <Link href={to}>
      <a>{children}</a>
    </Link>
  );
};

export default FooterLink;
