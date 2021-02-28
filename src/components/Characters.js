import React from 'react'
import EachCharacter from './EachCharacter'

function Characters({ characs }){
    return(
        <>
            <h1>Personagens</h1>
            <section className="cards">
                {characs.map(item => (
                    <EachCharacter key={item.char_id} item={item}></EachCharacter>
                ))}
            </section>
        </>

    );
}

export default Characters;