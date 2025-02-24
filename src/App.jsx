import './styles/App.css';
import WorldMap from './assets/world_map.png';

import axios from 'axios';

function App() {

    return (
        <>
            <img id="map" src={WorldMap} alt="World Map" />
        </>
    )
}

export default App
