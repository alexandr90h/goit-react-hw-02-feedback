// import Props from 'prop-types';
import React from 'react';
import styles from './statistic.module.scss';
import StatisticItem from './statisticItem';

class Statistic extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    decrementGood=()=> {
        this.setState(prev => ({
            good: prev.good + 1,
        }))
    }
    decrementNeutral=()=> {
        this.setState(prev => ({
            neutral: prev.neutral + 1,
        }))
    }
    decrementBad=()=> {
        this.setState(prev => ({
            bad: prev.bad + 1,
        }))
    }
    countTotalFeedback = () => {
        return (this.state.good+this.state.neutral+this.state.bad);
    }
    countPositiveFeedbackPercentage = () => {
        if (this.state.good === 0) {
            return(0)
        }
        return(Math.round(this.state.good/(this.state.good+this.state.neutral+this.state.bad)*100))
    }
    render() {
        return (
            <div className={styles.conteinerStats}>
                <h2>Please leave feedback</h2>
                <div className={styles.conteinerButton}>
                    <button type='button' onClick={this.decrementGood}>Good</button>
                    <button type='button' onClick={this.decrementNeutral}>Neutral</button>
                    <button type='button' onClick={this.decrementBad}>Bad</button>
                </div>
                <h2>Statistics</h2>
                <StatisticItem/>
            </div>
        )
    }
}
export default Statistic;