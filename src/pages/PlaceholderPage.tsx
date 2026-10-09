
import React from 'react';

export const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div style={{ paddingTop: '160px', paddingBottom: '100px', minHeight: '80vh', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', color: 'var(--gold-primary)', marginBottom: '24px' }}>{title}</h1>
        <p style={{ color: 'var(--text-secondary)' }}>This page is coming soon as part of the new BUILD. CREATE. PROMOTE. experience.</p>
      </div>
    </div>
  );
};
