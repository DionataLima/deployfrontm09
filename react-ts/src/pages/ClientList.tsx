import { useEffect, useState } from 'react';
import api from '../services/api';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await api.get('/clients');
        setClients(response.data);
      } catch (error) {
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.nome} - {client.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
