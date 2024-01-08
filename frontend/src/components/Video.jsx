import React from 'react'
import ReactPlayer from 'react-player/lazy'
function Video() {
  return (
    <div className='w-full'>
        <ReactPlayer controls={true} height={"400px"} width={"750px"} url='https://www.youtube.com/watch?v=7KDRqBpT8NA' />
    </div>
  )
}

export default Video
