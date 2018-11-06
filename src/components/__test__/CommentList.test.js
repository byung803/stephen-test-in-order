import React from 'react';
import { shallow } from 'enzyme';
import { CommentList } from '../CommentList';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<CommentList comments={['Comment 1', 'Comment 2']} />);
})

describe('CommentList compo', () => {
    it('creates one li per comment', () => {
        expect(wrapper.find('li').length).toBe(2);
    });

    it('shows the text for each comment, by text() ', () => {
        expect(wrapper.render().text()).toContain('Comment 1');
        expect(wrapper.render().text()).toContain('Comment 2');
    })
})

