import React, { useCallback } from 'react';
import { ObjectComponent } from '../../components/object/Object';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { IObject } from '../../types/base-types';
import { objectActions } from '../../store/reducers/objects-reducer/object-actions';
import { selectCurrentObjects } from './selectors/object-selector';
import { Wrapper } from './Wrapper';
import { page } from '../../index';

export const InitialView = React.memo(() => {
  const objects = useSelector(selectCurrentObjects, shallowEqual);
  const dispatch = useDispatch();
  const onDragEnd = useCallback(
    (params: IObject) => dispatch(objectActions.moveAction(params)),
    [dispatch],
  );

  return (
    <Wrapper>
      {objects.map((element) => (
        <ObjectComponent
          page={page}
          onDragEnd={onDragEnd}
          key={element.id}
          {...element}
        />
      ))}
    </Wrapper>
  );
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(InitialView);
