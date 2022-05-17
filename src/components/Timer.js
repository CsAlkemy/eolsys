import React from 'react';
import PlayButton from '../image/icon/play.png';
import PauseButton from '../image/icon/pause.png';

const Timer = () => {
    const [isPlay, setIsPlay] = React.useState(false);
  return (
    <div>
        <div className="flex justify-between bg-gray-900 text-white py-5 px-7 rounded-2xl h-20">
            <div className='text-2xl md:text-3xl tracking-wide font-bold text-gray-300'>Live Timer</div>
            { !!isPlay && (
                    <img src={PauseButton} alt="pause button" onClick={ () => setIsPlay(!isPlay)} className='h-12 w-12 cursor-pointer' />
                )
            }
            { !isPlay && (
                    <img src={PlayButton} alt="play button" onClick={ () => setIsPlay(!isPlay)}  className='h-12 w-12 cursor-pointer rotate-90' />
                )
            }
        </div>
        <div className='bg-gray-900 my-3 rounded-xl p-5 pb-10'>
            <div className='text-gray-50 mb-3 font-semibold text-xl'>Time in Secound</div>
            <div className='flex text-white border-2 border-gray-500 my-auto'>
                <div className='bg-emerald-500 h-28 w-10'>One</div>
                <div className='bg-orange-400 h-28 w-20'>Two</div>
                <div className='bg-blue-600 h-28 w-14'>Three</div>
                <div className='bg-teal-400 h-28 w-20'>Four</div>
            </div>
        </div>       
    </div>
  )
}

export default Timer