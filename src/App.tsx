import './App.css';
import { Header } from './assets/layout/header/Header';
import { Main } from './assets/layout/sections/main/Main';
import { Projects } from './assets/layout/sections/projects/Projects';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
        </div>
    );
}

export default App;

