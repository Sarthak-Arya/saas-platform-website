import react from 'react'
import Container from '../../components/Container/Container'
import './homepage.css'

function HomePage(){
    return(
        <Container>
            <div className='flex flex-row section-container section1 overflow-hidden min-h-screen pl-10'>
                <div className='bg-hero z-20'></div>
                <div className='flex flex-col w-auto min-h-screen justify-center text-left leading-tight z-10'>
                    <div className='heading-text-container' style={{fontSize: '72px'}}>
                        Unlock financial insights hidden in your contracts
                    </div>
                    <div className='about-continer mt-10' style={{fontSize: '20px'}}>
                        Discover data across your contract ecosystem to drive savings and reduce risk through Terakota AI
                    </div>
                    <div className='button-container'>

                    </div>
                </div>
                {/* Bug-ID - 202306270001 - Header is not transparent */}
                <div className='section-container-right scale-125 '>
                        <div className=''>
                            <video className='w-full' playsinline autoPlay muted loop>
                                <source type='video/mp4' src={require ('../../assests/videos/hero.mp4')} />
                            </video>
                        </div>
                </div>
            </div>
        </Container>
    )
}

export default HomePage