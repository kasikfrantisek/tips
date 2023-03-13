import React from 'react'

type Person = {
    [key: string] : number
}

function ResultDisplay({hourTips, data}:{hourTips:number, data:Person}) {
    const keys = Object.keys(data)
  return (
    <div className='flex flex-col items-center text-center text-lg font-medium space-y-3 m-4'>
        <h2>Total tips</h2>
        {keys.map((key:string, index:number) => {
            return(
                <p key={index}>{key}: {String(Math.floor(Number(data[`${key}`]) * hourTips))}</p>
            )
        })}
    </div>
  )
}

export default ResultDisplay