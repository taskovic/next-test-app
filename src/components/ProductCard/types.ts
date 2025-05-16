export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
};

export type ProductCardRenderProps = {
  product: Product;
};

export type ProductCardProps = {
  product: Product;
  children: (props: ProductCardRenderProps) => React.ReactNode;
}; 