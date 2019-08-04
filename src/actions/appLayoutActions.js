export const SET_SELECTED_CATEGORY = "set-selected-category"

export function setSelectedCategory(category){
    return {
        type:SET_SELECTED_CATEGORY,
        category
    }
}
