import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const AtividadeDetail = () => {
    const [atividade, setAtividade] = useState(null) //usa um null value quando ele ainda n existe (false value)
    const { atividadeId } = useParams();
    console.log(atividadeId);

    const getAtividade = async (id) => {
            try {
                const response = await axios.get(`http://localhost:5005/atividades${id}`);
                setProject(response.data); //in axios we always put .data
            } catch (error) {
                console.log('error fetching the ação', error)
            }
    };

    useEffect(() => {
         getAtividade(atividadeId);
    }, [atividadeId])

    //find returns the first element matching the condition
    //returns null if no element is found
    //const foundProject = projects.find(project => project._id === projectId)

    return (
        <div>
            
            {!atividade && <h3>Ação não encontrada</h3>}
            {atividade && (
                <div>
                    <h2>{atividades.name}</h2>
                    <p>{atividade.description}</p>
                </div>
            )}

            {atividade && atividade.map(acao => {
                return (
                    <div key={acao.id}>
                        <h3>{acao.name}</h3>
                        <p>{task.description}</p>
                    </div>
                );
            })}

          <Link to='/acoes'>Ações</Link>

        </div>
    );
};

export default AtividadeDetail;