const EquipeCard = (props) => {
    return(
        <div>
          <h2>{props.equipe.name}</h2>
          <p>{props.equipe.scientificName}</p>
          <img src="" alt="" />
        </div>
      )
 }

 export default EquipeCard;