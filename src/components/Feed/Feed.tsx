import React from 'react';
import Box from '@mui/material/Box';
import { FeedItem } from './types';
import { feedComponentRegistry } from './feedComponentRegistry';

export default function Feed({ items }: { items: FeedItem[] }) {
  return (
    <Box>
      {items.map((item) => {
        const Component = feedComponentRegistry[item.type as keyof typeof feedComponentRegistry];
        if (!Component) return null;
        return <Component key={item.id} data={item.data} />;
      })}
    </Box>
  );
}
