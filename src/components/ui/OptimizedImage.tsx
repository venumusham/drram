import React from 'react';

type OptimizedImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'fetchPriority'> & {
  priority?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  alt,
  decoding = 'async',
  loading,
  priority = false,
  sizes,
  ...props
}) => (
  <img
    {...props}
    alt={alt}
    decoding={decoding}
    loading={loading ?? (priority ? 'eager' : 'lazy')}
    fetchpriority={priority ? 'high' : props.fetchPriority ?? 'low'}
    sizes={sizes}
  />
);

export default OptimizedImage;
