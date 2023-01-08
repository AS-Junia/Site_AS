import "../css/Accueil.css"
import react from 'react'
import { useEffect, useRef} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin" 

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Accueil(){

  
  function image(nom, point, where = "Accueil") {  
    //Créer une variable stockant le nom de l'image
    const NomImage = nom;

    return (      
        <img id={`${NomImage}`} src={require(`../IMAGE/${where}/Image/${NomImage}.${point}`)}/>   
    );  
  }

  //Fonction qui affiche et fait monter le texte ou descendre en fonction de direction
  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 50;
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }

  // Fonction qui change l'opacité des elements hors écran pour pouvoir  faire l'effet d'apparition
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }

  useEffect(() => {
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); //cache l'élément quand tu le vois
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  },[])

  /*const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y:100,
      },
      {
        opacity: 1,
        y:0,
        delay: delay || 0,
        duration: duration || 0.5,
        scrollTrigger: {
          trigger: elem,
        }
      }
    )
  }

  
  useEffect(() => {
    slideInTop("p");
  },[])
  useEffect(() => {
    slideInTop("#Presentation");
  },[])
  useEffect(() => {
    slideInTop("#PleinImage");
  },[])*/

    return (
            
      <div id="PagePresentation">
        {/* La page est séparé en 2 grandes Div: FirstBox et SecondBox  */}
        <div id="FirstBox">
          {/* gs_reveal est une classe qui fais apparaitre ou disparaitre les éléments qui l'ont */}
          <h1 id="Bienvenue" className="gs_reveal">Bienvenue sur la page de l'as junia !</h1>

          <div className="gs_reveal">
            <p className="gs_reveal">Ce site te permettra de trouver toutes les informations nécessaires pour faire partie de la vie sportive de Junia !</p>
            <p className="gs_reveal">Toutes ces informations, t'aideront à mieux suivre nos événements.</p>
            <br></br>
            <p className="gs_reveal">Si tu as des questions tu peux nous contacter dans l'onglet Contact.</p>
          </div>

          <div className="gs_reveal">
            <h1 id="Presentation" className="gs_reveal">Présentation de l'as Junia</h1>

            <p className="gs_reveal">L'AS Junia est élue tous les ans afin d'aider à la bonne organisation des nombreuses associations sportives de l'école et proposer différents événements sportifs au cours de l'année scolaire.</p>
            <br></br>
            <br></br>
            <p className="gs_reveal">L'année dernière, les Bureaux Des Sports d'HEI, ISA et ISEN sont réunis pour ne faire qu'une AS JUNIA. C'est une nouvelle aventure qui permettra aux étudiants du groupe Junia de se rencontrer autour du sport.</p>
            <br></br>
            <br></br>
            <p className="gs_reveal">L'équipe Univok de Junia, a gagné les campagnes en mai 2022 et est devenus la nouvelle AS JUNIA.</p>
            <br></br>
            <br></br>
            <p className="gs_reveal">Pour l'année 2022-2023, l'AS JUNIA compte 52 associations sportives qui proposent des sports individuels et collectifs variés (badminton, danse, rugby, golf...).</p>
          </div>
          
          <div id="ImagePresentation" className="gs_reveal">
            <div className="OneImagePresentation">{image("Velo", "PNG")}</div>
            <div className="OneImagePresentation noPhone">{image("basket", "webp")}</div>
            <div className="OneImagePresentation ">{image("Boxe", "PNG")}</div>
            <div className="OneImagePresentation noPhone">{image("snow", "webp")}</div>
            <div className="OneImagePresentation">{image("Tennis", "PNG")}</div>
          </div>
        </div>

        <div id="SecondBox">

        <h1 id="Qui" className="gs_reveal">Qui sommes-nous ?</h1>


        <div className="infoMembre gs_reveal">
          Nous sommes une équipe de 39 étudiants de Junia de différentes promotions. <br></br>Pour mieux nous organiser, nous nous sommes répartis dans plusieurs pôles, en fonction de ce qui correspond le mieux à chacun.
          <br></br>Tu trouveras ci-dessous les membres de chaque pôle.</div>

        {/* Bureau */}
        <div className="pole gs_reveal">

          <div id="DivBureau" className="DivPresentation">
          <h1>Le <span className="letterWhite">Bureau</span></h1>
          <div className="DivName">
              <div className="nom">
                <p>LEON DELLON</p>
                <p>LOU DEREUX</p>
                <p>LOICK ZIROTTI</p>
                <p>MATHILDE LEMOINE</p>
                <p>PHILIPPE GAUDEFROY</p>
                <p>MAELA COCHET</p>
                <p>CELIA ROZAIRE</p>
                <p>Matthieu bars</p>
              </div>

              <div className="poste">
                <p>Président</p>
                <p>Vice-présidente HEI</p>
                <p>Vice-président ISEN</p>
                <p>Vice-présidente ISA</p>
                <p>Trésorier</p>
                <p>Vice-trésoriere</p>
                <p>Secrétaire</p>
                <p>Resp. Sécurité</p>
              </div>
          </div>
        </div>

          <div id="ImageBureau" className="PhotoNous">Photo du pole</div>

        </div> 
        
        {/* Event */}
        <div className="pole gs_reveal">

          <div id="ImageEvent" className="PhotoNous">Photo du pole</div>

          <div id="DivEvent" className="DivPresentation">
            <h1><span className="letterWhite">Le Pôle </span>Evenementiel</h1>
            <div  className="DivName">
              
              <div className="nom">
                <p>Capucine nicolau</p>
                <p>noémie gillardin</p>
                <p>Jean SCHNEIDEr</p>
                <p>églantine Bourdrez</p>
                <p>Margaux david</p>
                <p>Eva bourgeois</p>
                <p>clovis dufourg</p>
                <p>gauthier lamart</p>
                <p>alice petitpierre</p>
                <p>clémence debosque</p>
                <p>arthur prouvoyeur</p>
                <p>margaux berjon</p>
              </div>
              <div className="poste">
                <p>Resp. Event</p>
                <p>Resp. HEI</p>
                <p>Resp. ISEN</p>
                <p>Resp. ISA</p>
                <p>Resp. Apprentis</p>
                <p>Pôle Event</p>
                <p>Pôle Event</p>
                <p>Pôle Event</p>
                <p>Pôle Event</p>
                <p>Pôle Event</p>
                <p>Pôle Event</p>
                <p>Pôle Event</p>

              </div> 
            </div>
          </div>
          
        </div>

        {/* Commissions */}
        <div className="pole gs_reveal">

          <div id="DivCommission"className="DivPresentation">
            <h1><span className="letterWhite">Le Pôle</span> <span className="letterOrange">Commissions</span></h1>
            <div className="DivName">

              <div className="nom">
                  <p>Alexandre deprez</p>
                  <p>Raphaël hamot</p>
                  <p>thomas scalabre</p>
                </div>
              <div className="poste">
                <p>Trésorier</p>
                <p>Resp. commissions Glisse</p>
                <p>Resp. commissions (autres)</p>
              </div>
            
            </div>
          </div>

          <div id="ImageCommission" className="PhotoNous">Photo du pole</div>
          
        </div>

        {/* Sponsoring */}
        <div className="pole gs_reveal">

          <div id="ImageSponsoring" className="PhotoNous">Photo du pole</div>

          <div id="DivSponsoring" className="DivPresentation"> 

            <h1>Le Pôle <span className="letterWhite">Sponsoring</span></h1>
            <div className="DivName"> 
              <div className="nom">
                <p>Gustave lacheray</p>
              </div>
              <div className="poste">
                <p>Resp. Sponsors</p>
              </div>
            </div>
          </div>
        
        </div>

        {/* Communication */}
        <div className="pole gs_reveal">

          <div id="DivCommunication" className="DivPresentation">
                    
            <h1><span className="letterWhite">Le Pôle</span> <span className="letterOrange">Communication</span></h1>
              <div className="DivName">
                <div className="nom">
                  <p>éléa astié</p>
                  <p>noémie gillardin</p>
                  <p>joachim dieu</p>
                  <p>élina rosemberg</p>
                  <p>Margaux Bertin</p>
                  <p>jules hua</p>
                  <p>adèle cugnet</p>
                  <p>ninon tailliez</p>
                  <p>paul le bouffos</p>
                </div>
                <div className="poste">
                  <p>Resp. Communication</p>
                  <p>Resp. News</p>
                  <p>Resp. Site Internet</p>
                  <p>Resp. Ligne</p>
                  <p>Co-resp. Ligne</p>
                  <p>Pôle Communication</p>
                  <p>Pôle Communication</p>
                  <p>Pôle Communication</p>
                  <p>Pôle Communication</p>
                </div>
              </div>
          </div>

          <div id="ImageCommunication" className="PhotoNous">Photo du pole</div>

        </div>

        {/* Campagne */}
        <div className="pole gs_reveal">

          <div id="ImageCampagnes" className="PhotoNous">Photo du pole</div>

          <div id="DivCampagnes" className="DivPresentation">
            <h1><span className="letterWhite">Le Pôle</span> Campagnes</h1>
              <div className="DivName">
                <div className="nom">
                    <p>Jules marchand</p>
                    <p>bastien dugardin</p>
                    <p>grégoire mazin</p>
                  </div>
                <div className="poste">
                  <p>Co-resp. Campagnes</p>
                  <p>Co-resp. Campagnes</p>
                  <p>Resp. Trophée</p>
                </div>
              </div>
          </div>

        </div>

        {/* Associations Sportives */}
        <div className="pole gs_reveal">

          <div id="DivAssociations" className="DivPresentation">
            <h1><span className="letterWhite">Le Pôle</span> <span className="letterOrange">Associations Sportives</span></h1>
              <div className="DivName">
                <div className="nom">
                  <p>zoé beguin</p>
                  <p>camille pressoirs</p>
                  <p>louis pereira</p>
                  <p>théo nenonene</p>
                </div>
                <div className="poste">
                  <p>Resp. Sports Collectifs</p>
                  <p>Resp. Sports Individuels</p>
                  <p>Resp. Matériel</p>
                  <p>Resp. Licences</p>
                </div>
              </div> 
          </div>

          <div id="ImageAssociations" className="PhotoNous">Photo du pole</div>

        </div>

        </div>
      </div>
    )
}