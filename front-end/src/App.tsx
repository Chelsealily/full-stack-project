import './App.scss'
import CarCard from './Components/CarCard/CarCard'
import CardList from './Components/CarCardList/CarCardList'

function App() {

  return (
    <>
      <h1>My Favourite Cars</h1>
      <div className="card">
      <p>
        Click to learn more...</p>
        {/*<CardList cars={[<CarCard car={{
          id: 1,
          image: 'https://i.pinimg.com/564x/d1/70/e0/d170e021b5609229d89b45123a53d039.jpg',
          make: 'Porsche',
          model: 'Singer 911 Targa',
          year: 1989,
          color: 'Oak Green Metallic'
        }}/>]}/>
        <CarCard image={"https://i.pinimg.com/564x/d1/70/e0/d170e021b5609229d89b45123a53d039.jpg"} make={'Porsche'} model={'Singer 911 Targa'} year={1989} color={' Oak Green Metallic'}/>
      */}
      </div>
    </>
  )
}

export default App
