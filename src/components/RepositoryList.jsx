import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

//https://api.github.com/users/mores3000/repos

//https://api.github.com/orgs/rocketseat/repos

const respository = {
    name: 'unform2',
    description: 'Form in React',
    link: 'https://github.com/moraes3000',
}

export function RepositoryList() {

    const [respositories, setRespositories] = useState([])

    useEffect(() => {
        const url = 'https://api.github.com/orgs/rocketseat/repos';
        fetch(url).then(response => response.json())
        .then(data => setRespositories(data))
      
    }, [])

    console.log(respositories)

    return (
        <section className="repository-list">
            <h1>Lista de respositórios</h1>
            <ul>
                <RepositoryItem repository={respository} />

            </ul>
        </section>
    )
}