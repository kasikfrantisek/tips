import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

type Input = {
  names: string
}

function WorkerForm({fn}:{fn:Function}) {
  const  { register, handleSubmit } = useForm<Input>();

  const names:SubmitHandler<Input> = (data) => {
    const inputNames = data.names.split(' ');
    console.log(inputNames)
    fn(inputNames)
  }

  return (
    <div className='flex flex-col items-center text-center text-lg font-medium space-y-3 m-4'>
      <h3>Add everyone who was on the shift, separate them by space.</h3>
      <form onSubmit={handleSubmit(names)} className='flex flex-col space-y-3'>
        <label>Names:</label>
        <textarea className='border-2 border-black' required {...register('names')}/>
        <button type='submit' className='border-2 border-black'>Submit</button>
      </form>
    </div>
  )
}

export default WorkerForm