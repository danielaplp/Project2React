import { useState, useEffect } from 'react';
import axios from 'axios';

import MemberCard from '../components/MemberCard';




const QuemSomos = () => {
    

   const [team, setTeam] = useState([]);

    const getTeam = async () => {
        try {
            const response = await axios.get('https://project2-server.onrender.com/team');
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



/*{team.map(member => {
                return (
                     //<MemberCard member={member}/>
                    <div>
                    <h2>{member.fullName}</h2>
                    <p>{member.role}</p>
                    <img src={member.image} alt={member.fullName} />
                </div>
                );
            })}*/




