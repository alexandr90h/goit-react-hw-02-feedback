import styles from './statistic.module.scss';
export default function Notification({ message }) {
    return (<div className={styles.conteinerNotification}><p>{message}</p></div>)
}