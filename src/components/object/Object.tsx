import React, { useRef } from 'react';
import { Rect } from 'react-konva';
import type {
  ICoordinates,
  IObject,
  ISize,
  KonvaDrag,
} from '../../types/base-types';

interface Page {
  page: { width: number; height: number };
}

interface Props extends IObject, Page {
  onDragEnd: (params: IObject) => void;
}

export const ObjectComponent = React.memo(
  ({ width, height, backgroundColor, x, y, id, onDragEnd, page }: Props) => {
    const node = useRef(null);

    const handleDragEnd: KonvaDrag = React.useCallback(
      (evt) => {
        const { attrs } = evt.target;
        onDragEnd({
          id,
          x: attrs.x,
          y: attrs.y,
        });
      },
      [id, onDragEnd],
    );

    return (
      <Rect
        ref={node}
        x={x}
        y={y}
        draggable
        width={width}
        height={height}
        // onDragMove={onDragStart}
        dragBoundFunc={handleDragBoundFunc({ page, width, height })}
        // onDragStart={onDragStart}
        onDragEnd={handleDragEnd}
        fill={backgroundColor}
        shadowBlur={5}
      />
    );
  },
);

const handleDragBoundFunc = (params: Page & NonNullable<ISize>) => {
  const { page, width, height } = params;
  return (pos: ICoordinates) => {
    let newY = pos.y!;
    let newX = pos.x!;

    if (newX < 0) {
      newX = 0;
    }
    if (newX > page.width - width!) {
      newX = page.width - width!;
    }

    if (newY < 0) {
      newY = 0;
    }
    if (newY > page.height - height!) {
      newY = page.height - height!;
    }

    return {
      x: newX,
      y: newY,
    };
  };
};
