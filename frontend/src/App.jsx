import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home  from './pages/Home/Home'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  // const [jokes, setJokes] = useState([])

  // useEffect(() => {
  //   axios.get('/api/jokes')
  //   .then((response) => {
  //     setJokes(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // })


  return (
    <>
      {/* <h1> Hello This is Front End</h1>
      <p>  Jokes : {jokes.length} </p>
      {
        jokes.map((joke , index) => (
          <div key={joke.id}> 
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      } */}
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default App
