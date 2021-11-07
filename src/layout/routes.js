import React from 'react';
import WaterControl from '../pages/WaterControl';

export const routes = [
  {
    title: 'Water Control',
    path: '/',
    exact: true,
    body: () => <WaterControl />,
  },
];
