import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/signup.css";
import api from '../services/api';

const SignupPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (!name || !email) {
        setError('Por favor preencha todos os campos');
        return;
      }
      setError('');
      setStep(2); 
    } else if (step === 2) {
      if (!password || !confirmPassword || password !== confirmPassword) {
        setError('As senhas não correspondem ou estão vazias');
        return;
      }

      try {
        const response = await api.post('/signup', {
          nome: name,
          email: email,
          senha: password,
        });

        if (response.status === 201) {
          setStep(3);
        }
      } catch (err: any) {
        if (err.response && err.response.data && err.response.data.mensagem) {
          setError(err.response.data.mensagem);
        } else {
          setError('Erro ao tentar realizar o cadastro. Tente novamente.');
        }
      }
    }
  };

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <>
          <h2>Adicione seus dados</h2>
          <form onSubmit={handleNextStep}>
            <label htmlFor="name">Nome*</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />

            {error && <p className="error">{error}</p>}

            <button type="submit">Continuar</button>
          </form>
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <h2>Escolha uma senha</h2>
          <form onSubmit={handleNextStep}>
            <label htmlFor="password">Senha*</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />

            <label htmlFor="confirmPassword">Repita a senha*</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Repita sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            {error && <p className="error">{error}</p>}

            <button type="submit">Entrar</button>
          </form>
        </>
      );
    } else if (step === 3) {
      return (
        <div className="success-container">
          <div className="success-icon">
            <span>&#10003;</span>
          </div>
          <h2>Cadastro realizado com sucesso!</h2>
          <button onClick={() => navigate('/login')}>Ir para Login</button>
        </div>
      );
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-leftside">
        <ul>
          <li className={step >= 1 ? "active" : ""}>Cadastre-se</li>
          <li className={step >= 2 ? "active" : ""}>Escolha uma senha</li>
          <li className={step >= 3 ? "active" : ""}>Cadastro realizado com sucesso</li>
        </ul>
      </div>

      <div className="signup-rightside">
        {renderStepContent()}
        {step < 3 && (
          <p>Já possui uma conta? <a href="/login">Faça seu Login</a></p>
        )}

        <div className="progress-bar">
          <div className={step >= 1 ? "active" : ""}></div>
          <div className={step >= 2 ? "active" : ""}></div>
          <div className={step >= 3 ? "active" : ""}></div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
