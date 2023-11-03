import Title from './Title';
import aboutImg from '../images/about.jpeg'
import { Link } from 'react-router-dom';
const About = () => {
    const title = "my";
    const subTitle = "new title";
    return (
        <section className='section' id='about'>
        <Title title='About' subTitle='us' />
        <div className='section-center about-center'>
           <div className='about-img'>
            <img src={aboutImg} className='about-photo' alt='awesome beach'/>
           </div>
           <article  className='about-info'>
            <h3>Explore the difference</h3>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href='#' className='btn'>
            read more
          </a>
          <Link to="/">#VANLIFE</Link>
           </article>
        </div>
        </section>
        
    )
}

export default About