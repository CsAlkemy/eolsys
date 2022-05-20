import React from 'react';
import PlayButton from '../image/icon/play.png';
import PauseButton from '../image/icon/pause.png';
import StackedChart from './StackedChart';
import ProgressTimer from './ProgressTimer';

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
            <div className='text-gray-50 mb-3 font-semibold text-base'>Time in Secound</div>
            <div className='flex'>
                <div className='w-full'>
                    <StackedChart />
                </div>
            </div>
        </div>
        <div>
            <ProgressTimer />
        </div>
    </div>
  )
}

export default Timer