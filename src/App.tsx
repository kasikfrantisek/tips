import React, { useState } from 'react';
import WorkerForm from './components/WorkerFrom';
import HoursForm from './components/HoursForm';
import TotalTipsForm from './components/TotalTipsForm';
import ResultDisplay from './components/ResultDisplay';

type Person = {
  [key: string] : number
}

function App() {
  const [names, setNames] = useState<string[]>([])
  const [display, setDisplay] = useState<string>('names')
  const [nameHours, setNameHours] = useState<Person>({})
  const [totalHours, setTotalHours] = useState<number>(0)
  const [hourTip, setHourTip] = useState<number>(0);
  const [totalTips, setTotalTips] = useState<number>(0)

  const getNames = (data:string[]) => {
    setNames(data)
    setDisplay('hours')
  }

  const getTotalHours = (num:number) => {
    setTotalHours(num);
    setDisplay('totalTips');
  }

  const getNameHours = (data:Person) => {
    setNameHours(data)
  }

  const getTotalTips = (num:number) => {
    setTotalTips(num)
    setHourTip(num / totalHours);
    setDisplay('result')
  }


  return (
    <div className="App">
     {display === 'names' && <WorkerForm fn={getNames}/>}
     {display === 'hours' && <HoursForm names={names} fn={getTotalHours} response={getNameHours}/>}
     {display === 'totalTips' && <TotalTipsForm fn={getTotalTips} />}
     {display === 'result' && <ResultDisplay hourTips={hourTip} data={nameHours}/>}
    </div>
  );
}

export default App;
