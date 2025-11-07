import React from 'react'
import "./Card.css"

const Card=(props)=>{

    return (
        <div className='card'>
        <div  className='cardout'>
             <img src={props.img} alt={props.name} />
            <h1>{props.name}</h1>
            <p className="desc">{props.desc}</p>
            <div className='buttons'>
                    <a href={props.view} target="_blank" rel="noopener noreferrer"><button>View Project</button></a>
                    <a href={props.git} target="_blank" rel="noopener noreferrer"><button>Github Link</button></a>
             </div>
        </div>
        </div>
    )
}

export default Card