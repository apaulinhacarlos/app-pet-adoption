import { useMemo, useState } from 'react';

import { Button, Form } from 'react-bootstrap';
import { login } from '../services/api.service';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>()
  // const { verifyAuth, isAuth } = useContext(ApiContext);

  const navigate = useNavigate();

  const handleSubmit = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    const response = await login(email, password)
    if(response.status === 'OK') {
      // await verifyAuth();
      navigate('/');
    } else {
      setError(response.message ?? 'Usuário ou senha inválido')
    }
  }
  
  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const usernameTyped = target.value;
    setEmail(usernameTyped);
  }

  const handlePasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const passwordTyped = target.value;
    setPassword(passwordTyped);
  }

  const isUsernameValid = useMemo(() => {
    return !email.includes(' ')
  }, [email]);

  const isPasswordValid = useMemo(() => {
    const MIN_PW_LENGTH = 4;
    const passwordIsValid = password.length >= MIN_PW_LENGTH;
    return (passwordIsValid);
  }, [password]);

  const isDataValid = isUsernameValid && isPasswordValid

  // if (isAuth) {
  //   return navigate('/');
  // }

  return (
    
    <div>
      {error && <p>{error}</p>}

      <Form onSubmit={ handleSubmit }>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            value={ email }
            onChange={ handleEmailChange }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={ password }
            onChange={ handlePasswordChange }
          />
        </Form.Group>
        
        <Button
          variant="primary"
          type="submit"
          disabled={ !isDataValid }
        >
          Enviar
        </Button>

      </Form>
    </div>
  );
}

export default LoginForm;