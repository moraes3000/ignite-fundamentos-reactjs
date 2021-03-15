import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

//https://api.github.com/users/mores3000/repos

//https://api.github.com/orgs/rocketseat/repos

interface Repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {

    const [respositories, setRespositories] = useState<Repository[]>([])

    useEffect(() => {
        const url = 'https://api.github.com/orgs/rocketseat/repos';
        fetch(url).then(response => response.json())
            .then(data => setRespositories(data))

    }, [])

    // console.log(respositories)

    return (
        <section className="repository-list">
            <h1>Lista de respositórios</h1>
            <ul>
                {respositories.map(repository => (
                    <RepositoryItem key={repository.name} repository={repository} />
                ))}


            </ul>
        </section>
    )
}