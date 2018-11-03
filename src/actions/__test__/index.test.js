import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

describe('saveComment', () => {
    it('should send correct type', () => {
        const action = saveComment();
        expect(action.type).toBe(SAVE_COMMENT);
    })

    it('should have the correct comment', () => {
        const action = saveComment('comment check');
        expect(action.comment).toBe('comment check');
    })
})