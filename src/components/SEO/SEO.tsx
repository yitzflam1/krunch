import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'Krunchies Jerusalem - Premium Takeout Chicken',
  description = 'Experience premium takeout chicken crafted with passion at Krunchies Jerusalem. Serving yeshiva and seminary students, and catering for events throughout Jerusalem.',
  image = 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80',
  url = 'https://krunchies.com',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="keywords" content="kosher chicken, jerusalem food, takeout, catering, yeshiva food, seminary food, kosher restaurant" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Locale */}
      <meta property="og:locale" content="en_IL" />
    </Helmet>
  );
}