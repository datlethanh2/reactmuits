import React from 'react';
import RouteLayout from "./route/RouteLayout";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteLayout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
