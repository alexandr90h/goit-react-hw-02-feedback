// import Props from 'prop-types';
import React from 'react';
import styles from './statistic.module.scss';
import StatisticItem from './statisticItem';
import FeedbackOptions from './feedbackOptions';
import Notification from './notification';

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
                <FeedbackOptions
                    good={this.decrementGood}
                    neutral={this.decrementNeutral}
                    bad={this.decrementBad}
                />
                <h2>Statistics</h2>
                {this.state.good !== 0 ? <StatisticItem
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={<this.countTotalFeedback/>}
                    positivePercentage={<this.countPositiveFeedbackPercentage/>}
                />: <Notification message="No feedback given"/> }
            </div>
        )
    }
}
export default Statistic;