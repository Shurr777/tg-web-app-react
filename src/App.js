import './App.css';
import {useEffect} from "react";
import {usetelegram} from "./hooks/useTelegram";


function App() {
    const {onToggleButton, tg} = usetelegram()

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">
            Work
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
