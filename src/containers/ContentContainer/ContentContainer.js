import { useSelector } from 'react-redux'
import React from 'react'
import { Container } from '@material-ui/core'
import categories from '../../constants/categories'

const ContentContainer = () => {
    const selectedCategory = useSelector(state => state.appLayout.selectedCategory)
    return (
        <Container style={{ height: '100%' }}>
            <h1>{selectedCategory}</h1>
            {categories[selectedCategory].content}
        </Container>
    )
}

export default ContentContainer
