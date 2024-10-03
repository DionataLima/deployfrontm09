import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const EditClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({ nome: '', email: '', cpf: '', telefone: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await api.get(`/clients/${id}`);
        setClient(response.data);
      } catch (error) {
      }
    };

    fetchClient();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/clients/${id}`, client);
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.mensagem || 'Erro ao editar cliente');
      } else {
        setErrorMessage('Erro ao editar cliente, tente novamente mais tarde.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={client.nome}
          onChange={(e) => setClient({ ...client, nome: e.target.value })}
          placeholder="Nome"
        />
        <input
          type="email"
          value={client.email}
          onChange={(e) => setClient({ ...client, email: e.target.value })}
          placeholder="E-mail"
        />
        <input
          type="text"
          value={client.cpf}
          onChange={(e) => setClient({ ...client, cpf: e.target.value })}
          placeholder="CPF"
        />
        <input
          type="text"
          value={client.telefone}
          onChange={(e) => setClient({ ...client, telefone: e.target.value })}
          placeholder="Telefone"
        />
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Salvar alterações</button>
      </form>
    </div>
  );
};

export default EditClient;
