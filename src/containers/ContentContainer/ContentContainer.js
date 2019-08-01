import { useSelector } from 'react-redux'
import React from 'react'

const ContentContainer = () => {
    const selectedCategory = useSelector(state => state.appLayout.selectedCategory)
    return <h1>{selectedCategory}</h1>
}

export default ContentContainer
