import React, { Fragment, useState } from 'react'
import SideBar from '../../components/SideBar/SiderBar'
import HeaderToolbar from '../../components/HeaderToolbar/HeaderToolbar'
import ContentContainer from '../ContentContainer/ContentContainer'

export default function AppLayout() {
    const [showSideBar, setShowSideBar] = useState(false)

    function toggleSideBar() {
        setShowSideBar(!showSideBar)
    }

    return (
        <Fragment>
            <HeaderToolbar toggleSideBar={toggleSideBar} />
            <SideBar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
            <ContentContainer />
        </Fragment>
    )
}
