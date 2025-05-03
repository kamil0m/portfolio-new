import React from 'react'

export default function Logo() {
  return (
    <div className="flex flex-col tablet:flex-row border-2 border-blue-500 rounded-lg p-2 gap-2">

        <div className="flex flex-row">
            <div className="h-[1rem] w-[1rem] bg-blue-500"></div>
            <div>
                <p>Kamil Markowski</p>
            </div>
        </div>

        <div className="flex tablet:flex-row ">
            <span className="hidden tablet:block pl-4 pr-2">/</span>
            <p>Web developer</p>
        </div>

    </div>
  )
}
