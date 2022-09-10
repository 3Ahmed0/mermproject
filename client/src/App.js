import './App.css';
import { ReactDOM } from 'react-dom/client';
import {
  BrowserRouter, 
  Routes, 
  Route, 
} from 'react-router-dom'
import Form from './components/Form';
import Table from './components/Table';
import Nav from './components/Nav';
import Details from './components/Details';
function App() {
  return (


    <div>
      {/* <BrowserRouter>
      <div>

      
      <Nav/>
        <Routes>
          
          <Route path='/' element= {<Form/>}/>          
            <Route path='new' element= {<Form/>}/>
          <Route path='/get_pets' element= {<Table/>}/>
          

          
        </Routes>
        </div> */}
      {/* </BrowserRouter> */}
      
      <Form/>
     <Table/>   
    </div>
  )
}

export default App;
