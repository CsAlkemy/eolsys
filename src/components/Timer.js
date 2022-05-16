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
    </div>
  )
}

export default Timer