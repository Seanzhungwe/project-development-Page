import './App.css'
import Lottie from 'lottie-react'
import devAnimation from '../public/project-dev-animation.json'
import { GoGear } from 'react-icons/go'; 
const App = () => {
  return (
    <div>

<section id="lottie">

  <Lottie 
      className='lottie'
        animationData={devAnimation} 
        loop={true} 
        autoplay={true} 
        style={{ width: 500, height: 500 }} 
      />
       <h2>Project under development <GoGear className='gear'/> </h2>
</section>

    </div>
  )
}

export default App