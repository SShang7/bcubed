import React from 'react'
export default function ToWatch() {
    return (
        <>
            <form>
                <div>
                    <label for="exampleInputEmail1">Enter some tickers you'd like to favorite</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ticker"></input>
                </div>
            </form>
        </>
    )
}
