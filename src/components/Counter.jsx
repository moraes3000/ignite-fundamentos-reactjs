import { useState } from 'react'

export function Counter() {

    let [counter, setCounter] = useState(0)

    function increment() {
        console.log('increment')
        setCounter( counter + 1);
    }

    return (
        <div>
            <h2>Contador</h2>
            <p>{counter}</p>
            <button type="button" onClick={increment}>Add</button>
        </div>
    )
}