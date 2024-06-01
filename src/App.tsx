import './App.css';
import { Footer } from './assets/layout/footer/Footer';
import { Header } from './assets/layout/header/Header';
import { Exprirense } from './assets/layout/sections/expeirense/Exprirense';
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
            <Exprirense/>
            <Footer/>
        </div>
    );
}

export default App;

