import './App.scss'
import CarCard from './Components/CarCard/CarCard'

function App() {

  return (
    <>
      <h1>My Favourite Cars</h1>
      <div className="card">
      <p>
        Click to learn more...
        <CarCard image={"https://i.pinimg.com/564x/d1/70/e0/d170e021b5609229d89b45123a53d039.jpg"} make={'Porsche'} model={'Singer 911 Targa'} year={1989} color={' Oak Green Metallic'}/>
      </p>
      </div>
    </>
  )
}

export default App
