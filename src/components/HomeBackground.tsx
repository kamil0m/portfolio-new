export default function HomeBackground() {
  return (
    <div className="absolute -z-1 flex flex-col h-full w-full
    tablet:flex-row-reverse">

      <div className="h-65 w-screen bg-main-verylight
      tablet:h-full"
      />

      <div className="grow w-screen bg-main-dark
      tablet:w-3/5"
      />
    </div>
  )
}
