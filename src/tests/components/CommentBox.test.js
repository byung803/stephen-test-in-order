import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from '../../components/CommentBox';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<CommentBox />);
})

it('should have a textarea and a button', () => {
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
});

it('should have textarea that user can type in', () => {
    const value = 'type check';
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toBe(value);
    expect(wrapper.state('comment')).toBe(value);
})

it('should be empty string in state comment after submit form', () => {
    const value = 'type check';
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    wrapper.update();

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    wrapper.update();
    expect(wrapper.state('comment')).toBe('');

}) 