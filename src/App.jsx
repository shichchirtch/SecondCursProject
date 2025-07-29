import {useState} from "react";

function App() {

    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    const lov = "Love"

function togleIsOpen(){
    setIsOpen((prev)=>!prev);
    if (isOpen) {
        setCount(0);
    }
}
    return (
        <>
            {isOpen ? <span className="cross" onClick={togleIsOpen}>&times;</span> :
                <button onClick={togleIsOpen}>Начать</button>}

            {isOpen &&
            <div>

            <h1>Vite + React = {count>=4 ? lov : ''}</h1>

            <div className="logo-container">
        <img src="/vite.svg" className={`logo ${count>=1 ? 'active':''}`} alt="Vite logo" />
        <p>+</p>
        <img src="/react.svg" className={`logo ${count>=2 ? 'active':''}`} alt="React logo" />
        <p>=</p>
        <img src="/love.svg" className={`logo ${count>=3 ? 'active':''}`} alt="Love logo" />
      </div>

            <hr/>

            <div className="card">
                <p className="count-paragraph">count is {count}</p>
                <div className="increment-buttons">
                    <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
                    <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
                    <button onClick={() => setCount( 0 )}>Reset</button>
                </div>
            </div>
        </div>}
        </>
    );
}

export default App;