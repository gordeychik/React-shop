import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Button } from '../../ui/Button/Button';
import { auth } from '../../firebase';
import styles from './Auth.module.scss';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../../store/userSlice';

export const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                dispatch(setUser({ email: user.email }));
            } else {
                setAuthUser(null);
                dispatch(clearUser());
            }
        });
        return () => {
            unsubscribe();
        };
    }, [dispatch]);

    const userSignOut = () => {
        signOut(auth)
            .then(() => console.log('success'))
            .catch((e) => console.log(e));
    };

    return (
        <div>
            {authUser ? (
                <div>
                    <p className={styles.error}>{`Signed in as ${authUser.email}`}</p>
                    <Button onClick={userSignOut}>Sign out</Button>
                </div>
            ) : ''}
        </div>
    );
};