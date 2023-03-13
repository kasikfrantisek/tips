import React from 'react'
import {useForm} from 'react-hook-form'

type Input = {
    tips: number
}

function TotalTipsForm({fn}:{fn:Function}) {
    const  { register, handleSubmit } = useForm<Input>();

    const tips = (data:Input) => {
        fn(data.tips)
    }

  return (
    <div className='flex flex-col items-center text-center text-lg font-medium space-y-3 m-4'>
        <h2>What are the total tips?</h2>
        <form onSubmit={handleSubmit(tips)} className='flex flex-col space-y-3'>
            <input className='border-2 border-black' type='number' required {...register('tips')} />
            <button className='border-2 border-black' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default TotalTipsForm