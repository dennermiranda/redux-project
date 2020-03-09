import { ADD_ARTICLE } from '../constants/action-types';

const FORBIDDEN_WORDS = ['SPAM', 'MONEY'];

export function forbiddenWordsMiddleware ({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === ADD_ARTICLE){
                const foundWord = FORBIDDEN_WORDS.filter(word => 
                    action.payload.title.includes(word)    
                );
                if (foundWord.length) {
                    return dispatch({ type: 'FOUND_BAD_WORD' });
                }
            }
            return next(action);
        }
    }
}
