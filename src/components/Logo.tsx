export default function Logo() {
  return (
    <div className="flex flex-col tablet:flex-row tablet:items-center font-display">

        <div className="flex flex-row items-center font-semibold text-2xl">
            <div className="h-[1em] w-[1em] bg-accent mr-[1em] "></div>
            <div>
                <span className="text-2xl">Kamil Markowski</span>
            </div>
        </div>

        <div className="flex tablet:flex-row font-light uppercase">
            <span className="hidden tablet:block pl-4 pr-2">/</span>
            <span>Web developer</span>
        </div>

    </div>
  )
}
