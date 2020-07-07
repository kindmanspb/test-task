import React from 'react';
import { Layer as KonvaLayer } from 'react-konva';
import { LayerConfig } from 'konva/types/Layer';

interface Props extends LayerConfig {
  children: JSX.Element[];
}

export const Layer = React.memo(({ children, ...otherProps }: Props) => (
  <KonvaLayer {...otherProps}>{children}</KonvaLayer>
));
