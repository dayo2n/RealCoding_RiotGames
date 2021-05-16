import logo from '../logo.svg';
import './Header.css';

function Header(props) {

    // const city = "Seoul";

    console.log(props);
    const myCity = props.cityName;

  return (
        <header className="App-header">
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <img src={logo} className="App-logo" alt="logo" />
        <p className='title'>
          Cities of {myCity}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <link href="https://fonts.googleapis.com/css2?family=Rancho&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet"></link>
      
      </header>
  );
}

export default Header;
