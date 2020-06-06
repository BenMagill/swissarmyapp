import React, {useState} from 'react'
import "./index.css"

export default function Case() {

    const [capIn, _setCapIn] = useState("")
    const [capOut, setCapOut] = useState("")

    const setCapIn = (e) => {
        _setCapIn(e.target.value)
        setCapOut(e.target.value.toUpperCase())
    }

    const [lowerIn, _setLowerIn] = useState("")
    const [lowerOut, setLowerOut] = useState("")

    const setLowerIn = (e) => {
        _setLowerIn(e.target.value)
        setLowerOut(e.target.value.toLowerCase())
    }

    const [flipIn, _setFlipIn] = useState("")
    const [flipOut, setFlipOut] = useState("")

    const setFlipIn = (e) => {
        _setFlipIn(e.target.value)
        setFlipOut(e.target.value.split("").map(i => {
            if (i === i.toUpperCase()) {
                return i.toLowerCase()
            } else if (i === i.toLowerCase()) {
                return i.toUpperCase()
            }
            return i
        }).join(""))
    }

    const [capWordIn, _setCapWordIn] = useState("")
    const [capWordOut, setCapWordOut] = useState("")

    const setCapWordIn = (e) => {
        _setCapWordIn(e.target.value)
        setCapWordOut(e.target.value.split(" ").map(i => {
            if (i.length >1) {
                i = i.split("")
                i[0] = i[0].toUpperCase()
                i = i.join("")
            } 
            return i
        }).join(" "))
    }
    const [capNWordIn, _setCapNWordIn] = useState("")
    const [capNWordOut, setCapNWordOut] = useState("")
    const [capNWordNum, _setCapNWordNum] = useState("")

    const setCapNWordIn = (e) => {
        _setCapNWordIn(e)
        var newA = []
        for (let i = 0; i < e.split("").length; i++) {
            var l = e.split("")[i];
            const nth = parseInt(capNWordNum, 10)
            console.log(nth)
            if (isNaN(nth) !== true) {
                if (i%nth === 0) {
                    l = l.toUpperCase()
                } 
            }
            newA[i] = l
        }
        newA = newA.join("")
        setCapNWordOut(newA)
    }
    // Try and get it so changing the number updates the word
    const setCapNWordNum = (e) => {
        _setCapNWordNum(e)

    } 

    return (
        <div>
                <p className="formLabel">Capitalise</p>
                <input type="text" placeholder="Input..." value={capIn} onChange={setCapIn}/>
                <br/>
                <input type="text" className="output" placeholder="Output..." disabled value={capOut}/>

                <p className="formLabel">Lowercase</p>
                <input type="text" placeholder="Input..." value={lowerIn} onChange={setLowerIn}/>
                <br/>
                <input type="text" className="output" placeholder="Output..." disabled value={lowerOut}/>

                <p className="formLabel">Flip Case</p>
                <input type="text" placeholder="Input..." value={flipIn} onChange={setFlipIn}/>
                <br/>
                <input type="text" className="output" placeholder="Output..." disabled value={flipOut}/>

                <p className="formLabel">Cap first letter of words</p>
                <input type="text" placeholder="Input..." value={capWordIn} onChange={setCapWordIn}/>
                <br/>
                <input type="text" className="output" placeholder="Output..." disabled value={capWordOut}/>

                <p className="formLabel">Cap Nth Letter</p>
                <input type="text" className="inputInline" placeholder="Input..." value={capNWordIn} onChange={(e) => setCapNWordIn(e.target.value)}/>
                <br/>
                <input type="text" className="inputInline numberIn" placeholder="Every" value={capNWordNum} onChange={(e) => setCapNWordNum(e.target.value)}/>
                <br/>
                <input type="text" className="output" placeholder="Output..." disabled value={capNWordOut}/>
        </div>
    )
}
