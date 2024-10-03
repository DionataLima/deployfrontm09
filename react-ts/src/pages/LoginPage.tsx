import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import "../styles/login.css"
import loginImage from "../assets/images/unsplash_QeVmJxZOv3k.png"

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, senha });
      if (response.data) {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      }
    } catch (err: any) {
      setError(err.response?.data?.mensagem || 'Erro ao tentar fazer login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-leftside">
      <div className="login-text">
    Gerencie todos os pagamentos <br />
    da sua empresa em um só <br />
     lugar.
  </div>
      <img src={loginImage} alt="Login Image" className="login-image" />
    </div>
      <div className="login-rightside">
        <form onSubmit={handleLogin}>
          <h1>Faça seu login!</h1>
          {error && <p className="error-message">{error}</p>}
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="forgot-password">
            <a href="/forgot-password">Esqueceu a senha?</a>
          </div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
          <p>
            Ainda não possui uma conta? <a href="/signup">Cadastre-se</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
