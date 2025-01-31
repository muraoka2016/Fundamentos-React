import React from "react";

const alunos = [
    {id: 1, nome:'Ana'},
    {id:2 , nome: 'Carlos'},
    {id:3 , nome: 'Antonio'}
]

function Lista(){
    return (
        <ul>
            {alunos.map((aluno) => <li key={aluno.id}>{aluno.nome}</li>)}
        </ul>
    )

}

export default Lista;