import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link  } from 'react-router-dom';


// http://localhost:5005/birds



const QuemSomos = () => {

    const [team, setTeam] = useState() 
    const { teamId } = useParams();
    console.log(teamId);

    const getMemberTeam = async member => {
            try {
                const response = await axios.get('http://localhost:5005/team');
                setProject(response.data); 
            } catch (error) {
                console.log('error fetching the member', error)
            }
    };

    useEffect(() => {
        getMemberTeam(teamId);
    }, [teamId])

    return (
        <div>
          <h1>Quem Somos</h1>
          <div className="equipe-container">
            {equipe.map((equipe, index) => (
              <div key={index} className="membro">
                <img src={require(`./imagens/${equipe.imagem}`).default} alt={equipe.nome} />
                <h2>{equipe.nome}</h2>
                <p>{equipe.funcao}</p>
              </div>
            ))}
          </div>
        </div>
      );
   
};

export default QuemSomos;