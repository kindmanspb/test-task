import React from 'react';
import { Stage } from 'react-konva/lib/ReactKonvaCore';
import { Layer } from '../../components/layer/Layer';
import styles from './initial-view.module.css';
import { page } from '../../index';

export const Wrapper = ({ children }: { children: JSX.Element[] }) => (
  <Stage className={styles.wrapper} width={page.width} height={page.height}>
    <Layer>{children}</Layer>
  </Stage>
);
