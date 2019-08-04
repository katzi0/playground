import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import categories from '../../constants/categories'
import ListItemText from '@material-ui/core/ListItemText'
import { useDispatch } from 'react-redux'
import { SET_SELECTED_CATEGORY } from '../../actions/appLayoutActions'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
})

export default function SideBar({ toggleSideBar, showSideBar }) {
    const classes = useStyles()
    const [state, setState] = React.useState({
        selectedCategory: categories.EXAMPLE_LIST
    })

    const dispatch = useDispatch()


    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        toggleSideBar({ [side]: open })
    }

    const onClick = (category) => () => {
        console.log(category)
        dispatch({ type: SET_SELECTED_CATEGORY, category: category })
    }

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {Object.keys(categories).map((key) => (
                    <ListItem button key={key} onClick={onClick(key)}>
                        <ListItemIcon>{categories[key].icon}</ListItemIcon>
                        <ListItemText primary={key} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <div>
            <SwipeableDrawer
                anchor="left"
                anchor="left"
                open={showSideBar}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {sideList('right')}
            </SwipeableDrawer>
        </div>
    )
}
