// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
// import React from "react";
=======
>>>>>>> e7f9f8bd536b143623d84fa3c2da5c1109d824cd

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarks" element={<Index />} />
            <Route path="/bookmarks/new" element={<New />} />
            <Route exact path="/bookmarks/:id" element={<Show />} />
            <Route path="/bookmarks/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
