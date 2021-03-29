import ContentLoader from 'react-content-loader';
import React from 'react';

export const Loader = props => (
  <ContentLoader
    speed={2}
    width="100%"
    height={500}
    backgroundColor="#f3f3f3"
    foregroundColor="#ececec"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="50" />
    <rect x="0" y="60" rx="10" ry="10" width="100%" height="50" />
    <rect x="0" y="120" rx="10" ry="10" width="100%" height="50" />
    <rect x="0" y="180" rx="10" ry="10" width="100%" height="50" />
    <rect x="0" y="240" rx="10" ry="10" width="100%" height="50" />
    <rect x="0" y="300" rx="10" ry="10" width="100%" height="50" />
  </ContentLoader>
);
