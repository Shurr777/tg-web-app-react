import './App.css';
import {useEffect} from "react";
import {usetelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";


function App() {
    const {onToggleButton, tg} = usetelegram()

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">
            <Header />
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
