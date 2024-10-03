import React, { useEffect, useState } from 'react';
import api from '../services/api';
import "../styles/dashboard.css"

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    chargesPaid: [],
    chargesOverdue: [],
    chargesExpected: [],
    clientsInadimplentes: [],
    clientsEmDia: [],
  });

  const fetchDashboardData = async () => {
    try {
      const response = await api.get('/dashboardCharges');
      setDashboardData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do dashboard:', error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Resumo das cobranças</h1>
      <div className="summary-boxes">
        <div className="summary-box">
          <h2>Cobranças Pagas</h2>
          <p>R$ {dashboardData.chargesPaid.reduce((sum, charge) => sum + charge.value, 0)}</p>
          <ul>
            {dashboardData.chargesPaid.map((charge) => (
              <li key={charge.id}>
                {charge.client} - R$ {charge.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="summary-box">
          <h2>Cobranças Vencidas</h2>
          <p>R$ {dashboardData.chargesOverdue.reduce((sum, charge) => sum + charge.value, 0)}</p>
          <ul>
            {dashboardData.chargesOverdue.map((charge) => (
              <li key={charge.id}>
                {charge.client} - R$ {charge.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="summary-box">
          <h2>Cobranças Previstas</h2>
          <p>R$ {dashboardData.chargesExpected.reduce((sum, charge) => sum + charge.value, 0)}</p>
          <ul>
            {dashboardData.chargesExpected.map((charge) => (
              <li key={charge.id}>
                {charge.client} - R$ {charge.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="client-status">
        <div className="status-box">
          <h2>Clientes Inadimplentes</h2>
          <ul>
            {dashboardData.clientsInadimplentes.map((client) => (
              <li key={client.id}>
                {client.name} - {client.cpf}
              </li>
            ))}
          </ul>
        </div>
        <div className="status-box">
          <h2>Clientes em dia</h2>
          <ul>
            {dashboardData.clientsEmDia.map((client) => (
              <li key={client.id}>
                {client.name} - {client.cpf}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
