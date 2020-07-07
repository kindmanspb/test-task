import { KonvaEventObject } from 'konva/types/Node';

export interface ISize {
  width?: number;
  height?: number;
}

export interface ICoordinates {
  x?: number;
  y?: number;
}

export interface IStyle {
  backgroundColor?: string;
}

export interface Id {
  id: number;
}

export interface IObject extends ISize, ICoordinates, IStyle, Id {
  isDragging?: boolean;
}

export type KonvaDrag = (evt: KonvaEventObject<DragEvent>) => void;
