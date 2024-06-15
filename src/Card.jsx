import React from 'react'
import "./Card.css"

const Card=(props)=>{

    return (
        <div  className='cardout'>
             <img src={props.img}/><br/>
            <h1>{props.name}</h1>
            <br/>
            <p>{props.desc}</p>
            <div className='buttons'>
                    <a href={props.view}><button>View Project</button></a>
                    <a href={props.git}><button>Github Link</button></a>
             </div>
        </div>
    )
}

export default Card