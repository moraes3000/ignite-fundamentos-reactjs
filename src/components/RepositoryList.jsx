import { RepositoryItem } from "./RepositoryItem";

const respository = {
    name: 'unform2',
    description: 'Form in React',
    link: 'https://github.com/moraes3000',
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de respositórios</h1>
            <ul>
                <RepositoryItem repository={respository} />

            </ul>
        </section>
    )
}