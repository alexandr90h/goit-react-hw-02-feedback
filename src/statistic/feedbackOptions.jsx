import styles from './statistic.module.scss';
export default function FeedbackOptions({ good, neutral, bad }) {
                   return (<div className={styles.conteinerButton}>
                    <button type='button' onClick={good}>Good</button>
                    <button type='button' onClick={neutral}>Neutral</button>
                    <button type='button' onClick={bad}>Bad</button>
                </div>)

}