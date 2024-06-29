
import { useState, useEffect } from 'react';
import axios from 'axios';
import BirdCard from '../components/BirdCard'
import AddBirdForm from '../components/AddNewBird';
import { Link } from 'react-router-dom'



const Especies = () => {
    

    const [bird, setBird] = useState([]);
 
     const getBird = async () => {
         try {
             const response = await axios.get('https://project2-server.vercel.app/birds');
             setBird(response.data);
             console.log('Response:', response.data);
         } catch (error) {
             console.log('Error fetching the bird:', error);
         }
     };

     const deleteHandler = async (id) => {
        try {
          await axios.delete(`https://project2-server.vercel.app/birds/${id}`);
          setBird(bird.filter(b => b.id !== id));
          console.log(`Card com ID ${id} excluído com sucesso`);
        } catch (error) {
          console.log('Erro ao excluir o card:', error);
        }
      };
 
     useEffect(() => {
         getBird();
     }, []);



     const addNewBird = newBird => {
        
       

       

        const UpdatedBirdList = [newBird, ...bird];
        setBird(UpdatedBirdList);
    };

     return (
        <div>
            

           
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            
        {bird.map(birds => (
          <BirdCard birds={birds} key={birds.id} deleteHandler={deleteHandler} /> 
          
        ))}
       <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/especies/novaespecie">
          <button
            style={{
              backgroundColor: '#4299e1',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '7px',
              position: 'absolute',
              bottom: '300px',
              right: '150px',
              
    
              
            }}
          >
            Adicionar Novo Pássaro
          </button>
        </Link>
      </div>
      </div>
   

         

        </div>
    );

   
};
 

export default Especies;


