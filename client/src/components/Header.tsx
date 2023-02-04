
import logo from '../logo.svg';
import '../App.css';

export const Header = ()=>{
   
    return(
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />     
        <h1>Block de notas</h1>  
      </div>
    )
}