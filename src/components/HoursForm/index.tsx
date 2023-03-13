import React from 'react'
import {useForm} from 'react-hook-form'

type Input = {
    [key:string] : number
}


function HoursForm({names, fn, response}:{names:string[], fn:Function, response:Function}) {
    const  { register, handleSubmit } = useForm();

    const totalHours = (data:Input) => {
        console.log(data)
        const totalHours = Object.values(data).reduce((a:number,b:number) => Number(a) + Number(b), 0)
        fn(totalHours)
        response(data)
    }
  return (
    <div className='flex flex-col items-center text-center text-lg font-medium space-y-3 m-4'>
        <h2>Add hours to them</h2>
        <form onSubmit={handleSubmit(totalHours)} className='flex flex-col space-y-3'>
            {names.map((name:String, index:number) => {
                return(
                    <div className='flex flex-col' key={index}>
                        <label>{name}</label>
                        <input type='number' className='border-2 border-black' step='any' {...register(`${name}`)} />
                    </div>
                    )
            })}

            <button type="submit" className='border-2 border-black'>Submit</button>
        </form>
    </div>
  )
}

export default HoursForm