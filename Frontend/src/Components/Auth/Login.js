import { useForm } from 'react-hook-form';
import styles from './Auth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo2.png'

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/api/auth/login', data, {
      withCredentials: true, // to send and receive cookies
    });


    if (response.status === 200) {
      alert('Login successful!');
      const {accessToken} =response.data;
      if(accessToken){
        localStorage.setItem("accessToken",accessToken)
      }else{
        console.log("Token Not Received");
        
      }
      // No localStorage usage anymore

      // Navigate to dashboard or protected route
      navigate('/login'); // adjust the route as per your app
    }
  } catch (error) {
    console.error('Login error:', error);
    if (error.response) {
      alert(error.response.data.message || 'Login failed');
    } else {
      alert('An unexpected error occurred. Please try again.');
    }
  }
};


  return (
    
  <div className={styles.authContainer}>
    
    <div >
      <img src={logo} alt="Logo" className={styles.centeredImage}/>
    </div>
      <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.authTitle}>Login to your account</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Adresse e-mail</label>
          <input
            id="email"
            type="email"
            className={styles.input}
            {...register('email', {
              required: 'Veuillez entrer votre adresse e-mail.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Veuillez entrer une adresse e-mail valide',
              },
            })}
          />
          {errors.email && <div className={styles.error}>{errors.email.message}</div>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Mot de passe</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            {...register('password', {
              required: 'Veuillez entrer votre mot de passe.',
              minLength: {
                value: 6,
                message: 'Le mot de passe doit contenir au moins 6 caractères',
              },
            })}
          />
          {errors.password && <div className={styles.error}>{errors.password.message}</div>}
        </div>

        <button type="submit" className={styles.submitButton}>
          Se connecter
        </button>

        <p className={styles.toggleText}>
          Vous n’avez pas de compte ?{' '}
          <Link to="/register" className={styles.toggleLink}>S’inscrire</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
