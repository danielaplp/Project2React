const imgURL = "https://static.wixstatic.com/media/c74d60_e241dd8722164bd9808b58e64a8190de~mv2.jpg/v1/fill/w_930,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c74d60_e241dd8722164bd9808b58e64a8190de~mv2.jpg"

const Homepage = () => {
  return(
    <div>
      <h1>Aves de Noronha</h1>
      <img src={imgURL} alt="home" className="page-img" />
    </div>
  )
   
  };
  
  export default Homepage;