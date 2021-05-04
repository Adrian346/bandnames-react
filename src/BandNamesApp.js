import React from 'react'
import { SocketProvider } from './conext/SocketContext'

import HomePage from './pages/HomePage'

export const BandNamesApp = () => {
    return (
        <SocketProvider>
            <HomePage/>
        </SocketProvider>
    )
}
