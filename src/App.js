import { General } from "./pages/general/General";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<General />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
