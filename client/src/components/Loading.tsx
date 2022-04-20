import React from 'react'
import spinner from '../spinner.gif';
const Loading = () => {
  return <div className='loading'>
            <img src={spinner} alt="loading" />
        </div>
}

export default Loading