import CardPerson from "../components/CardPerson"
import HomeBackground from "../components/HomeBackground"
import { NavLink } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <div className="relative flex flex-col grow items-center 
      tablet:flex-row tablet:justify-center"
      >
        <HomeBackground />

        <CardPerson name="Kamil Markowski" />

        <section className="flex flex-col w-8/10 h-auto mt-10 mb-10 tablet:top-1/5 tablet:w-2/5 tablet:ml-50">
          <h1>Hello World</h1>
          <h3 className="mt-7 mb-2">Who I Am & What I Do</h3>

          {/* For desktop view only */}
          <div className="hidden my-10 gap-6 tablet:flex">
            < NavLink className="button button-accent" to="/cv">CV</NavLink>
            < NavLink className="button button-transparent" to="/projects">Projects</NavLink>
          </div>
          
          <div className="font-light">
            <p>
              I’m Kamil Markowski, a passionate web developer with a strong focus on creating intuitive, responsive, and engaging front-end experiences.
            </p>
            <p>
              With a foundation in JavaScript, React and Node.js I transform ideas into high-performing digital solutions. My goal is to turn concepts into seamless digital experiences by writing clean and efficient code. Explore my work to see how I can blend problem-solving creativity with technology to bring your ideas to life.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
