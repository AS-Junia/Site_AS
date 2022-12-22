
import {Routes, Route} from "react-router-dom"
//Page de navigation
import NavBar from "./Page/NavBar/NavBar"
//Page d'Accueil
import Accueil from "./Page/Accueil/Accueil"

//Page qui parlent des Associations
import Commission from "./Page/LesAssociations/Commission/Commission"
import Association from "./Page/LesAssociations/Association/Association"
import Resultat from "./Page/LesAssociations/Resultat/Resultat"

//Page qui parlent des Projets
import Projets_future from "./Page/NosProjets/Projets_future/Projets_future"
import PinkRun from "./Page/NosProjets/PageProjets/PinkRun/PinkRun"

//Page qui parlent des AfterWorks
import NosAfterWorks from './Page/NosAfterWorks/NosAfterWorks';
import AfterWorks_future from "./Page/NosAfterWorks/AfterWorks_future/AfterWorks_future"
import AfterWorks_recap from "./Page/NosAfterWorks/AfterWorks_recap/AfterWorks_recap"

import { comment } from "./Page/LesAssociations/Association/TableauAsso";

//Page pour nous constacter
import Contact from './Page/Contact/Contact'
import SetAssociation from "./Page/LesAssociations/Association/Render"

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
        <Route path="/Resultat" element={<Resultat/>}/>

        {/* Liens vers les pages Projets */}
        <Route path="/Projets_future" element={<Projets_future/>}/>
        {/*<Route path="/PinkRun" element={<PinkRun/>}/> */}

        {/* Liens vers les pages AfterWorks */}
        <Route path="/NosAfterWorks" element={<NosAfterWorks/>}/>
        <Route path="/AfterWorks_future" element={<AfterWorks_future/>}/>
        <Route path="/AfterWorks_recap" element={<AfterWorks_recap/>}/>

        {/* Liens vers la pages Contact */}
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
