import React, {useState} from 'react'
import { CarouselData } from '../../Data/CarouselData.'
import "./Carousel.scss"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Carousel = ({slides}) => {
const [current , setCurrent] = useState(0) ; 
const length =slides.length

const nextSlide = () => {

    setCurrent(current === length -1 ? 0 : current+1)

}

const prevSlide = () => {

    setCurrent(current === 0 ? length-1 : current-1)

}

console.log(current)


if (!Array.isArray(slides) || slides.length <=0) {
    return null ;
} 

  return (
  <section className='carousel'>
    <ArrowLeftIcon className="leftArrow"  onClick={prevSlide}/>
    <ArrowRightIcon className="rightArrow" onClick={nextSlide} />

  {CarouselData.map((slide , index) => {

return (

    <div className={index === current ? 'slide active' : 'slide' } key={index} >
{index === current && (
<img src={slide.Image} alt="Coworking Space Image" className='image'/>)}
    </div>

)




  } )}
  
  </section>
  )
}

export default Carousel