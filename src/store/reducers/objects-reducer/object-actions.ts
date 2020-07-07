import { createAction } from 'typesafe-actions';
import { IObject } from '../../../types/base-types';

const moveAction = createAction('MOVE_OBJECT')<IObject>();

export const objectActions = {
  moveAction,
};
