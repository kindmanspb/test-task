import { createReducer } from 'typesafe-actions';
import { objectActions } from './object-actions';
import { IObject } from '../../../types/base-types';
import Konva from 'konva';
import produce from 'immer';

const generateInitialState = () =>
  [...new Array(4000)].map((object, index) => ({
    id: index,
    x: Math.floor(Math.random() * 1920),
    y: Math.floor(Math.random() * 1080),
    backgroundColor: Konva.Util.getRandomColor(),
    width: 50,
    height: 50,
  }));

const initialState: IObject[] = generateInitialState();

const objectsReducer = createReducer(initialState as IObject[]).handleAction(
  objectActions.moveAction,
  (state, action) =>
    produce(state, (draft) => {
      const { id } = action.payload;
      draft[id] = { ...draft[id], ...action.payload };
    }),
);

export default objectsReducer;
export type objectsReducerState = ReturnType<typeof objectsReducer>;
