export default function Logo() {
  return (
    <div className="flex flex-col tablet:flex-row tablet:items-center font-display">

        <div className="flex flex-row items-center font-semibold text-2xl">
            <div className="h-[1em] w-[1em] bg-blue-500 mr-[1em]"></div>
            <div>
                <p>Kamil Markowski</p>
            </div>
        </div>

        <div className="flex tablet:flex-row font-light uppercase">
            <span className="hidden tablet:block pl-4 pr-2">/</span>
            <p>Web developer</p>
        </div>

    </div>
  )
}
