import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

import { Article } from "./Article";
export const ArticlesContainer = () => {
  return (
    <section className='mt-6 md:flex'>
        <Article 
          img={img1}
          number='01'
          title='Reviving Retro Pcs'
          text='What happens when PCs are given modern upgrades?'
        />
        <Article 
           img={img2}
           number='02'
           title='Top 10 laptops 2022'
           text='What happens when PCs are given modern upgrades?'
        />
        <Article 
           img={img3}
           number='03'
           title='The Growth of gaming'
           text='What happens when PCs are given modern upgrades?'
        />
    </section>
  )
}
