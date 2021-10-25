import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './Countdown';

const App = () => {
    // const reminders = [{time: 5, message: 'You have 5 seconds remaining'}, {time:2, message: 'You have 2 seconds remaining'}];
    const onDone = () => {
        console.log('On Done!');
    }
    const onTick = () => {
        console.log('On Tick!');
    }
    const onReminder1 = () => {
        console.log('On reminder 1')
    }
    const onReminder2 = () => {
        console.log('On reminder 2')
    }
    return (
        <div> 
       <Countdown 
       onTick={onTick} 
       onDone={onDone} 
       onReminder1={onReminder1}
       onReminder2={onReminder2}
       startTime={10} 
       endTime={0} 
       type="decrement" 
       interval={1000} 
       message="Happy New Year!"
       reminder1={5}
       reminder2={2} >
       <h1>HEY from Children!</h1> 
       </Countdown>
        </div>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'));