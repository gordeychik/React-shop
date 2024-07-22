import { useState } from 'react';
import { SignIn } from '../Auth/SignIn';
import { SignUp } from '../Auth/SignUp';
import styles from './ModalAccount.module.scss';
import { Close } from '../../assets/icons/Close';

interface ModalAccountProps {
    onClose: () => void;
}

export const ModalAccount = ({ onClose }: ModalAccountProps) => {
    const [activeTab, setActiveTab] = useState('signin');

    const handleSign = () => {
        setActiveTab('signin');
    };

    const handleLog = () => {
        setActiveTab('login');
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modal__wrapper}>
                <div className={styles.modal__tabs}>
                    <span
                        onClick={handleSign}
                        className={activeTab === 'signin' ? styles.active : ''}
                    >
                        Log In
                    </span>
                    <span
                        onClick={handleLog}
                        className={activeTab === 'login' ? styles.active : ''}
                    >
                        Sign In
                    </span>
                </div>
                {activeTab === 'signin' ? <SignIn onClose={onClose} /> : <SignUp onClose={onClose} />}
                <button className={styles.btn__close} onClick={onClose}><Close /></button>
                <span className={styles.vpn}>*работает только с VPN</span>
            </div>
        </div>
    );
};