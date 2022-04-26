import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import * as Modules from './Modules';
import Datenschutz from './Pages/Datenschutz/Datenschutz';
import Impressum from './Pages/Impressum/Impressum';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Modules.LandingImage
                  text={'IT ALL STARTS WITH A VISION'}
                ></Modules.LandingImage>
                <Modules.AboutUs></Modules.AboutUs>
                <Modules.OurTeam></Modules.OurTeam>
                <Modules.Quote
                  quote={
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At dolores magni illo ad sequi quas quos dignissimos corporis quod modi doloremque et incidunt laudantium corrupti autem ea maxime, officia commodi.'
                  }
                  quoteer='Konfuzius'
                ></Modules.Quote>
                <Modules.Services></Modules.Services>
                <Modules.Workflow></Modules.Workflow>
                <Modules.OurWork></Modules.OurWork>
                <Modules.Contact></Modules.Contact>
              </>
            }
          />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/dsgvo' element={<Datenschutz />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
