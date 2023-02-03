import React from 'react'

const Synonym = ({definition}) => {
    return (

        <div className="columns-2 md:columns-3">
            {definition.map(val => val.meanings.map(means => means.definitions.map(def => {
                return def.synonyms?.map(syn => (
                    <li>{syn}</li>
                ))
            })))}
        </div>
    )
}

export default Synonym