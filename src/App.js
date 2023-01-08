
import {Routes, Route} from "react-router-dom"
//Page de navigation
import NavBar from "./Page/js/NavBar"
//Page d'Accueil
import Accueil from "./Page/js/Accueil"

//Page qui parlent des Associations
import Commission from "./Page/js/LeSport/Commission"
import Association from "./Page/js/LeSport/Association"

//Page qui parlent des Projets
import Projets_future from "./Page/js/Projets_future"

//Page qui parlent des AfterWorks
import NosAfterWorks from './Page/js/NosAfterWorks';

import { comment } from "./Page/js/LeSport/TableauAsso";

//Page pour nous constacter
import Contact from './Page/js/Contact'
import SetAssociation from "./Page/js/LeSport/Render"

//Page Faq
import Faq from './Page/js/Faq'

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>

        <Route path="/" element={<Accueil/>}/>

        {/* Liens vers les pages Associations */}
        <Route path="/Commission" element={<Commission/>}/>
        <Route path="/Association" element={<Association/>}/>
        <Route path="/Association/:id" element={<SetAssociation props={comment}/>}/>
        <Route path="/Commission/:id" element={<SetAssociation props={comment}/>}/>

        {/* Liens vers les pages Projets */}
        <Route path="/Projets_future" element={<Projets_future/>}/>
        {/*<Route path="/PinkRun" element={<PinkRun/>}/> */}

        {/* Liens vers les pages AfterWorks */}
        <Route path="/NosAfterWorks" element={<NosAfterWorks/>}/>
        
        {/* Liens vers la pages Contact */}
        <Route path="/Contact" element={<Contact/>}/>

        {/* Liens vers la pages Faq */}
        <Route path="/Faq" element={<Faq/>}/>
      </Routes>
    </div>
  );
}

export default App;
