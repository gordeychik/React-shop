import { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from '../../ui/Button/Button';
import styles from './Auth.module.scss';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

export const SignUp = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [copyPassword, setCopyPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        if (password !== copyPassword) {
            setError('Password didn"t match!');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser({ email: user.email }));
                setError('');
                setEmail('');
                setPassword('');
                setCopyPassword('');
                onClose(); 
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };

    return (
        <div>
            <form onSubmit={register} className={styles.form}>
                <h3>Create an account</h3>
                <input placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                <input placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                <input placeholder='Your password again' value={copyPassword} onChange={(e) => setCopyPassword(e.target.value)} type='password' />
                <Button type="submit">Create</Button>
                {error ? <p className={styles.error}>{error}</p> : ''}
            </form>
        </div>
    );
};