import { useForm } from 'react-hook-form';
import styles from './Auth.module.css';
import { Link } from 'react-router-dom';
 import axios from 'axios';
import logo from '../../assets/logo2.png'

const Register = () => {
  const {
  register,
  handleSubmit,               //handle submit will check validation 9bal submit api call
  formState: { errors },
} = useForm({                 //store data and validate   
  mode: 'onChange',          // Validate on first change
  reValidateMode: 'onChange', // Revalidate on every change
});



//submit calls the API 
const onSubmit = async (data) => { 
  try {
    console.log('Registration form submitted', data);

    const response = await axios.post('http://localhost:3001/api/auth/register', data);

    if (response.status === 201) {
      alert('Registration successful!');
      // Optional: reset form or redirect to login
    }
  } catch (error) {
    console.error('Registration error:', error);

    if (error.response) {
      // Server responded with a non-2xx status
      alert(error.response.data.message || 'Registration failed');
    } else {
      // Unexpected error (like network failure)
      alert('An unexpected error occurred. Please try again.');
    }
  }
};

//ui layout
  return (
    <div className={styles.authContainer}>
      <div >
      <img src={logo} alt="Logo" className={styles.centeredImage}/>
    </div>
      <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}> 
        <h2 className={styles.authTitle}>Créer un compte</h2>


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
                message: 'Veuillez entrer une adresse e-mail.valide',
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
              required: 'Veuillez entrer votre mot de passe',
              minLength: {
                value: 6,
                message: 'Le mot de passe doit contenir au moins 6 caractères',
              },
            })}
          />
          {errors.password && <div className={styles.error}>{errors.password.message}</div>}
        </div>

        <button type="submit" className={styles.submitButton}>
          S’inscrire
        </button>

        <p className={styles.toggleText}>
          Vous avez déjà un compte ?{' '}
          <Link to="/login" className={styles.toggleLink}>Se connecter</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
