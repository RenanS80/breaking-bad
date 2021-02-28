import React from 'react'

function EachCharacter({ item }) {
    return (
        <div className="card">
            <img src={item.img} alt="Foto do personagem"></img>
            <h2>{item.name}</h2>
            <ul>
                <li>Conhecido como: {item.nickname}</li>
                <li>Ator: {item.portrayed}</li>
                <li>Data de Nascimento: {item.birthday}</li>
            </ul>
        </div>
    );
}

export default EachCharacter;


