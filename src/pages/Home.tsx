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
            < NavLink className="button button-accent" to="/">CV</NavLink>
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
    // <div className="flex flex-col items-center 
    // tablet:flex-row-reverse tablet:h-screen">

    //   <div className="relative bg-main-verylight h-65 w-full
    //   tablet:h-full"
    //   />

    //   <div className="flex flex-col justify-center items-center bg-main-dark h-auto w-full pt-55
    //   tablet:min-h-screen tablet:w-2/5"
    //   />

    //   <div className="relative bg-main-verylight h-65 w-full
    //   tablet:h-full"
    //   ></div>

    //   <div className="flex flex-col justify-center items-center bg-main-dark h-auto w-full pt-55
    //   tablet:min-h-screen tablet:w-2/5"
    //   >

        
    //     <div className="flex flex-col">
    //       <CardPerson name="Kamil Markowski"/>

    //       <section className="flex flex-col w-8/10 h-auto pt-22 mb-10
    //       tablet:absolute left-1/2 tablet:top-1/5 tablet:w-2/5">
    //         <h1 className="text-5xl font-bold">Hello World</h1>
    //         <div className="font-light">
    //           <p className="mt-5">
    //             I’m Kamil Markowski, a passionate web developer with a strong focus on creating intuitive, responsive, and engaging front-end experiences.
    //           </p>
    //           <p className="mt-5">
    //             With a foundation in JavaScript, React and Node.js I transform ideas into high-performing digital solutions. My goal is to turn concepts into seamless digital experiences by writing clean and efficient code. Explore my work to see how I can blend problem-solving creativity with technology to bring your ideas to life.
    //           </p>
    //         </div>
    //       </section>
    //     </div>



    //   </div>

    // </div>
  )
}
