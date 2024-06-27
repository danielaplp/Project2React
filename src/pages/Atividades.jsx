


import { useState, useEffect } from 'react';
import axios from 'axios';
import AtividadesCard from '../components/AtividadesCard'

import { Link } from 'react-router-dom'



const Atividades = () => {
    

    const [atividade, setAtividade] = useState([]);
 
     const getAtividade = async () => {
         try {
             const response = await axios.get('https://project2-server.onrender.com/atividades');
             setAtividade(response.data);
             console.log('Response:', response.data);
         } catch (error) {
             console.log('Error fetching the atividade:', error);
         }
     };

    
 
     useEffect(() => {
         getAtividade();
     }, []);

     return (
        <div>
            

           
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            
        {atividade.map(atividades => (
          <AtividadesCard atividades={atividades} key={atividades.id} /> 
          
        ))}
       <div style={{ marginTop: '20px', textAlign: 'center' }}>
        
       
      </div>
      </div>
   

         

        </div>
    );

   
};


    
    export default Atividades;