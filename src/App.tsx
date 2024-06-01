import './App.css';
import { Header } from './assets/layout/header/Header';
import { Main } from './assets/layout/sections/main/Main';
import { Projects } from './assets/layout/sections/projects/Projects';
import { Teshnologies } from './assets/layout/sections/teshnologies/Teshnologies';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Teshnologies/>
        </div>
    );
}

export default App;

