import React from 'react';
import { shallow } from 'enzyme';
import { CommentBox } from '../../components/CommentBox';

let wrapper, saveComment;

beforeEach(() => {
    saveComment = jest.fn();
    wrapper = shallow(<CommentBox saveComment={saveComment} />);
})

it('should have a textarea and a button', () => {
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
});

describe('textarea and form', () => {
    let value;
    beforeEach(() => {
        value = 'type check';
        wrapper.find('textarea').simulate('change', {
            target: { value }
        });
        wrapper.update();
    });

    it('should have textarea that user can type in', () => {

        expect(wrapper.find('textarea').prop('value')).toBe(value);
        // expect(wrapper.state('comment')).toBe(value);
    })

    it('should be empty string in state comment after submit form', () => {
        expect(wrapper.find('textarea').prop('value')).toBe(value);

        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        });
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toBe('');
        // expect(wrapper.state('comment')).toBe('');
    })

    it('should call saveComment action creator when submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        });
        wrapper.update();
        expect(saveComment).toHaveBeenCalled();
    })
})

