import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom' 

export default function Watchlist() {
    const { currentUser } = useAuth()
    if(currentUser) {
        return (
            <div>
            <h2 className="watchHeader">{currentUser.email}'s watchlist: </h2>
            <Link className="new" to="/towatch">add some more tickers?</Link>
            </div>
        )
    }
    else {
        return (
            <div>
            <h2>The watchlist feature is for users!</h2>
            <Link className="new" to="/signup">Create an Account?</Link>
            </div>
        )
    }
}
