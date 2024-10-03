import { useState } from 'react';
import api from '../services/api';

const ClientForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/clients', { nome, email, cpf, telefone });
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.mensagem || 'Erro ao cadastrar cliente');
      } else {
        setErrorMessage('Erro ao cadastrar cliente, tente novamente mais tarde.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" />
        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" />
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ClientForm;
