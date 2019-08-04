import { SET_SELECTED_CATEGORY } from '../actions/appLayoutActions'


export const categories = {
    EXAMPLE_LIST: 'EXAMPLE_LIST',
    THIS_EXAMPLES: 'THIS_EXAMPLES'
}

const defaultState = {
    selectedCategory: categories.EXAMPLE_LIST
}

export default function appLayout(state = defaultState, action) {
    switch (action.type) {
        case SET_SELECTED_CATEGORY: {
            return { ...defaultState, selectedCategory: action.category }
        }
        default:{
            return defaultState
        }

    }
}
