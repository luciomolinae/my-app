
import './App.css';


// MUI import
import Grid from '@mui/material/Grid';


// Components import
import Navbar from './components/NavBar';
import ItemListProducts from './components/ItemListProducts';



function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Grid mt={1} container spacing={12}>
      <Grid item xs={3}>
     <ItemListProducts/>
      </Grid>
        <Grid item xs={3}>
        <ItemListProducts/>
    </Grid>
    <Grid item xs={3}>
      <ItemListProducts/>
    </Grid>
    <Grid item xs={3}>
    <ItemListProducts/>
      </Grid>
  </Grid>

  
      
      
    </div>
  );
}

export default App;
