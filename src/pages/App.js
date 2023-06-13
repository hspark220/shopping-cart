import Navigation from "../components/Navigation";
import "../css/app.css"

const App = props => {

  return (
    <>
      <h1>Homepage</h1>
      <Navigation cart={props.cart}/>
    </>
  )
}

export default App;
