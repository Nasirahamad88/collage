import About from './component/about/page'
import Footer from './component/footer/page'
import Hero from './component/hero/page'
import Navbar from './component/navbar/page'
import News from './component/news/page'
import Teacher from './component/teachers/page'

export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Teacher/>
      <About/>
      <News/>
      <Footer/>
      
      
    </div>
  )
}
