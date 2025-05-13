export default function StylesTester() {
  return (
    <>
      <div>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
      </div>
      <div>
        <h2>Colors</h2>
        <div className="bg-primary text-primary-content">Primary</div>
        <div className="bg-secondary text-secondary-content">Secondary</div>
        <div className="bg-accent text-accent-content">Accent</div>
      </div>
    </>
  )
}
