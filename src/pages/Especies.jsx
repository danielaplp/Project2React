import avesNoronha from '../db.json'
import { useState } from 'react'
import BirdCard from '../components/BirdCard';

const mapAvesNoronha = avesArray => {
    return avesArray.map(ave => {
        return {

        }
    })
}


const Especies = () => {
const [aves, setAves] = useState(mapAvesNoronha(avesNoronha));


    return(
        <div>
           {aves.map(ave => {
            return (
                <BirdCard
                name={ave}
                key={ave.id} />
            )
           })}
        </div>
    )
   
};

export default Especies;


