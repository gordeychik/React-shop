import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '../../ui/Button/Button';
import styles from './Auth.module.scss';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

export const SignIn = ({onClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser({ email: user.email }));
                setError('');
                setEmail('');
                setPassword('');
                onClose();
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h3>Enter account details</h3>
                <input
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                />
                <input
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                />
                <Button type="submit">Enter</Button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
};