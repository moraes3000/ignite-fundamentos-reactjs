import { useState } from 'react'

// imutabilidade, criar um novo dado e não alterar um dado existente


// usuarios = ['bruno', 'derek', 'bia']
//usuarios.push('luiz')

//add novo dado no array, cria uma novo e adiciona o novo item no final

//novoUsuario = [... usuarios, 'Luiz']

export function Counter() {

    const [counter, setCounter] = useState(0)

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