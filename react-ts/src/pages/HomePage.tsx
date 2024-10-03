import { useEffect, useState } from 'react';
import api from '../services/api';

const HomePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Bem-vindo à Home</h1>
      {userData && <p>Bem-vindo, {userData.nome}</p>}
    </div>
  );
};

export default HomePage;
