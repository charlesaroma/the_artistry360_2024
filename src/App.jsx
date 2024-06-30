import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/2.Home/1.Home.jsx';
import Classes from './Pages/3.Classes/1.Classes.jsx';
import Profile from './Pages/4.Profiles/1.Profiling.jsx';
import Gallery from './Pages/5.Gallery/1.Gallery.jsx';
import Contact from './Pages/6.Contact/1.Contact.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
