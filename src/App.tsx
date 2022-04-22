import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import * as Modules from './Modules';

function App() {
  return (
    <>
      <NavBar></NavBar>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
