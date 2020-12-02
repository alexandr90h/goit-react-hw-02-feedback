import PropTypes from 'prop-types';
import styles from './statistic.module.scss';
export default function StatisticItem({ good, neutral, bad, total, positivePercentage }) {
   return (<ul className={styles.listStats}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
    </ul>)
}
StatisticItem.protoTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage:PropTypes.number,
}