import CardPerson from "../components/CardPerson"

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="bg-main-verylight h-50 w-full"></div>
      <div className="flex flex-col justify-center items-center bg-main-dark h-auto w-full">
        <CardPerson name="Kamil Markowski"/>
        <section className="flex flex-col w-7/10 h-auto -translate-y-3/5">
          <h1>Hello World</h1>
          <p>
            I’m Kamil Markowski, a passionate web developer with a strong focus on creating intuitive, responsive, and engaging front-end experiences. 
            With a foundation in JavaScript, React and Node.js I transform ideas into high-performing digital solutions. My goal is to turn concepts into seamless digital experiences by writing clean and efficient code. Explore my work to see how I can blend problem-solving creativity with technology to bring your ideas to life.
            </p>

        </section>
      </div>
    </div>
  )
}
