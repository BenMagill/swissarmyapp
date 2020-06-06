import React, {useState} from 'react'

export default function Random() {

    const [reverseIn, _setReverseIn] = useState("")
    const [reverseOut, setReverseOut] = useState("")

    const setReverseIn = (e) => {
        _setReverseIn(e)
        handleReverse(e)
    }

    const handleReverse = (e) => {
        setReverseOut(e.split("").reverse().join(""))
    }

    const [randomLen, _setRandomLen] = useState("")
    const [randomOut, setRandomOut] = useState("")

    const setRandomLen = (e) => {
        _setRandomLen(e.target.value)
        const length = parseInt(e.target.value, 10)
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

        const randomStr = []
        
        for (let i = 0; i < length; i++) {
            randomStr.push(chars[Math.floor(Math.random() * Math.floor(chars.length))])
        }

        setRandomOut(randomStr.join(""))
    }

    return (
        <div>
            <p  className="formLabel">Reverse Text</p>
            <input type="text" placeholder="Input..." value={reverseIn} onChange={(e)=>{setReverseIn(e.target.value)}}/>
            <br/>
            <input type="text" className="output"placeholder="Output..." disabled value={reverseOut}/>

            <p  className="formLabel">Random Text</p>
            <input type="text" placeholder="Length..." value={randomLen} onChange={setRandomLen}/>
            <br/>
            <input type="text" className="output"placeholder="Output..." disabled value={randomOut}/>
        </div>
    )
}
