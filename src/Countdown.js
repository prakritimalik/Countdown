import React, {useState, useEffect} from 'react';

const Countdown = ({startTime, endTime = 0, message, interval = 1000, type, onDone, onTick, reminder1, reminder2, reminder1message, reminder2message, onReminder1, onReminder2, children}) => {
    const [currentValue, setCurrentValue] = useState(startTime);
    var id;
    
    useEffect(() => {
        if(type === 'increment') {
            id = setTimeout(() => { if(currentValue < endTime)
                {setCurrentValue(currentValue + 1); onTick();
               }}, interval);
              
        }
        else if(type==='decrement') {
       id =  setTimeout(() => { if(currentValue > endTime)
         {setCurrentValue(currentValue - 1); onTick();
        }}, interval);
    }
    if(currentValue === endTime) {
        onDone();
       }

       if(currentValue === reminder1) {
           onReminder1();
       }
       if(currentValue === reminder2) {
        onReminder2();
    }

    }, [currentValue]);

    const setMessage = () => {
        if(type === 'increment') {
            if(currentValue >= endTime) {
                return message; 
            }
            else {
                return currentValue;
            }
        } else if(type === 'decrement') {
            if(currentValue <= endTime) {
                return message;
            } else {
                return currentValue;
            }
        }
    }

    const onReset = () => {
        clearTimeout(id);
        setCurrentValue(startTime);
    }

    return (
        // <div>
        // <h1> Countdown</h1>
        // {currentValue === endTime && children} 
        // {/* <p> {type==='decrement'  && currentValue >= endTime ? currentValue : message } </p>
        // <p> {type==='increment'   && currentValue >= endTime ? message : currentValue}</p> */}
        // {setMessage()}
        // <button onClick={onReset}> Reset Timer</button>
        // </div>
        <div className="row">
  <div className="col-sm-6 m-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Countdown Component</h5>
        {currentValue === endTime && children} 
        <p className="card-text">{setMessage()}</p>
        <button onClick={onReset} class="btn btn-primary">Reset Timer</button>
      </div>
    </div>
  </div>
</div>
    );
}

export default Countdown;