export default function Slider({volume,handleChange}) {

  return (
    <>
      <div className="slider-container">
        <input type="range" step={0.1} min={0.1} max={1.0} value={volume} onChange={handleChange} />
      </div>
    </>
  )
}