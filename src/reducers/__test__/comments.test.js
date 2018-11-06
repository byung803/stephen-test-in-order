import React from 'react';
import { shallow } from 'enzyme';
import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('should test reducers comments', () => {
    const action = {
        type: SAVE_COMMENT,
        comment: 'New Comment'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    const action = {
        type: 'adsfasd'
    }

    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
})