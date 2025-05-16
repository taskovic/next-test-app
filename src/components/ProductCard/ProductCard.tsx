import React from 'react';
import { ProductCardProps } from './types';

export default function ProductCard({ product, children }: ProductCardProps) {
  return <>{children({ product })}</>;
} 