import React from 'react'
import huhu from '../assets/logo2.png'
import styled from 'styled-components'
const VideoContainer = styled.div`
width: 100%;
img{
    padding-top: 6rem;
    width: 90%;
    height: auto;
}
`
const CoverVideo = () => {
    return(
       <VideoContainer>
        <img src={huhu} />
        </VideoContainer>
    )
}

export default CoverVideo