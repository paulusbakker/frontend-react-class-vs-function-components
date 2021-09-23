import React from 'react';
import './App.css';

function App() {
    const [isLightOn, toggleIsLightOn] = React.useState(true)

    return (
        <div>
            <button
                type='button'
                onClick={() => toggleIsLightOn(!isLightOn)}>
                {isLightOn ? 'Aan' : 'Uit'}
            </button>


        </div>
    );
}

export default App;
