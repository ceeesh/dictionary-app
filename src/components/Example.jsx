import React from 'react'

const Example = ({ definition }) => {
    return (
        <div>
            {definition.map(val => val.meanings.map(means => means.definitions.map(def => (
                <div key={def.example}>
                    {def.example && (
                        <li>{def.example}</li>
                    )}
                </div>
            ))))}
        </div>
    )
}

export default Example