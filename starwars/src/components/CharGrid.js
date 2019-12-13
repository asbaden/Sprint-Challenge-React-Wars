import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./CharCard";
import { Container, Row} from 'reactstrap';



export default function CharGrid() {
    const [char, setChar] = useState([])
     useEffect(()=>{
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data.results)
            setChar(response.data.results)
        })
        .catch(error=> {
            console.log("data was not retrieved", error);
        })
    },[]);
    
    
    
    return (
       <Container>
            <Row>
                
            {char.map(char => {
            return (
                <CharCard
                key={char.id}
                name={char.name}
                birth={char.birth_year}
                mass={char.mass}
                height={char.height}
                
                />
            );
            })}
            </Row>
        </Container>

    );
}


