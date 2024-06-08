import { useState } from 'react'

const FormBw = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mounth, setMounth] = useState("");
  const [phone, setPhone] = useState("");


  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleMounth = (event) => {
    setMounth(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name,
      email,
      city,
      phone
    };

    addPersonHandler(newPerson);

    // Para limpar o formulário depois do usuário preencher e submeter
    setName("");
    setEmail("");
    setCity("");
    setPhone("");
  };

  return (
    <div>
      <h2>Agende sua Expedição</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        
        <label>Email</label>
        <input type="text" name="image" value={email} onChange={handleEmail} />

        <label>Cidade</label>
        <input type="text" name="calories" value={city} onChange={handleCity} />

        <label>Mês da Expedição</label>
        <input type="text" name="calories" value={mounth} onChange={handleMounth} />

        <label>Telefone</label>
        <input type="text" name="servings" value={phone} onChange={handlePhone} />

        <button type="submit">Submeter</button>
      </form>
    </div>
  );
};

export default FormBw;