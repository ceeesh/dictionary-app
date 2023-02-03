import React from 'react'

const MeaningList = ({ definition }) => {
    console.log(definition)
    return (
        <div>
            {definition.map(val => val.meanings.map(means => means.definitions.map(def => (
                <div key={def.definition}>
                    <li>{def.definition}</li>
                    <hr/>
                </div>
            ))))}
        </div>
    )
}

export default MeaningList