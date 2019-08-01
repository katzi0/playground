import { SET_SELECTED_CATEGORY } from '../actions/appLayoutActions'

const categories = {
    EXAMPLE_LIST: 'EXAMPLE_LIST'
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
