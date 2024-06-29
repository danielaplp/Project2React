import { useState, useEffect } from 'react';
import axios from 'axios';

import MemberCard from '../components/MemberCard';
import atoba from '../assets/atoba de pe vermelho 2.png'
import sebito from '../assets/sibito 2.png'
import rabojunco from '../assets/rabo de palha de bico laranja 2.png'
import cocoruta from '../assets/cocoruta 2.png'
import grazina from '../assets/grazina 2.png'
import tesourao from '../assets/tesourao 2.png'
import trintareis from '../assets/trinta reis preto 2.png'




const QuemSomos = () => {
    

   const [team, setTeam] = useState([]);

   const birdImages = [atoba, sebito, rabojunco, cocoruta, grazina, tesourao, trintareis];

    const getTeam = async () => {
        try {
            const response = await axios.get('https://project2-server.vercel.app/team');
            setTeam(response.data);
            console.log('Response:', response.data);
        } catch (error) {
            console.log('Error fetching the team:', error);
        }
    };

    useEffect(() => {
        getTeam();
    }, []);

    return (
        
        <div>
            
            
            {!team && <h3>Não encontrado</h3>}

           
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                
        {team.map(member => (
          <MemberCard member={member} key={member.id} />
           
        ))}
        
            

        
      </div>
   

         

        </div>
    );

   
};

export default QuemSomos;








