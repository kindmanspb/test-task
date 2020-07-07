import { RootState } from '../../../types/typesafe-actions';

export const selectCurrentObjects = (state: RootState) => state.objects;
