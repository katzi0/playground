export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY"

export function setSelectedCategory(category){
    return {
        type:SET_SELECTED_CATEGORY,
        category
    }
}
