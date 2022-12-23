import "./Commission.css"
import "../../Couleur.css"
import { useEffect} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import {Link} from "react-router-dom"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Commission(){

    // Mettre l'URL de l'image pour l'attribut "src"
    function image(nom) {  
        //Créer une variable stockant le nom de l'image
        const nomImage = nom;
    
        return (      
        <div>
            <img className="Blason"
                //Mettre la variable nomImage dans l'attribut src  
                src={require(`../../IMAGE/Logos asso/${nomImage}.png`)}      
                alt={`${nomImage}`}     
            />
        </div>    
        );  
    }

    function animateFrom(elem) {
        var x = 0,
            y = 50;
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        gsap.fromTo(elem, {x: x, y: y}, {
          duration: 1.5, 
          x: 0,
          y: 0, 
          ease: "expo", 
          overwrite: "auto"
        });
      }

    
    useEffect(() => {
        gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
          
            ScrollTrigger.create({
              trigger: elem,
              onEnter: function() { animateFrom(elem) }, 
            });
          });
    },[])  

    return (
        <div id="Commission">
            <h1 id="Titre">Les 20 Commissions</h1>

            <div id="allCommission">
                <div className="side">
                    
                    <div className="box Orange">
                        <h1>Citarun</h1><br></br>
                        <h2>Perrine Puiseux</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                        
                    </div>
                    <div className="box Violet gs_reveal">

                        <h1>heirsoft</h1><br></br>
                        <h2>Matthieu Cuccaroni</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                        
                    </div>
                    <div className="box Orange gs_reveal">

                        <h1>jumping</h1><br></br>
                        <h2>Jade Beugnet</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                                
                    </div>
                    <div className="box Violet gs_reveal">

                        <h1>p'heitanque</h1><br></br>
                        <h2>Gaspard Seroux</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <Link className="text-link" to="/Commission/RACING_KART_JUNIA">
                    <div className="box Orange gs_reveal">
                        <h1>rheicing kart</h1><br></br>
                        <h2>Emilien Delannoy</h2>
                        {image("LOGO_RACING_KART_JUNIA")}

                    </div>
                    </Link>
                    <div className="box Violet gs_reveal">

                        <h1>sk'heite</h1><br></br>
                        <h2>Enzo Barbier</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box Orange gs_reveal">

                        <h1>surfbrheik</h1><br></br>
                        <h2>Gustave Lacheray</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <Link className="text-link" to="/Commission/Laser_Game">
                    <div className="box Violet gs_reveal">

                        <h1>laser game</h1><br></br>
                        <h2>Corentin Xemar</h2>
                        {image("logo_fond_neutre")}
                    </div>
                    </Link>
                    <div className="box Orange gs_reveal">

                        <h1>skisa</h1><br></br>
                        <h2>Baptiste Leclerc</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <Link className="text-link" to="/Commission/LA_RHEICRE_JUNIA">
                    <div className="box Violet gs_reveal">

                        <h1>La Rheicré</h1><br></br>
                        <h2>Michel-Edouard Coin</h2>
                        {image("LogoRheicre")}
                    </div>
                    </Link>
                </div>
                <div className="side">
                    <div className="box Pantone">

                        <h1>heixpress</h1><br></br>
                        <h2>Chloé Lelong</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box White gs_reveal">

                        <h1>l'éQUIPAGE</h1><br></br>
                        <h2>Pierre de fournas</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box Pantone gs_reveal">

                        <h1>north beach</h1><br></br>
                        <h2>Giulio lucidi</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box White gs_reveal">

                        <h1>raid hei</h1><br></br>
                        <h2>Marie Bultez</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box Pantone gs_reveal">

                        <h1>rock n'junia</h1><br></br>
                        <h2>Lilou Klein</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box White gs_reveal">

                        <h1>ski club hei</h1><br></br>
                        <h2>Quentin fritsh</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box Pantone gs_reveal">

                        <h1>wildweek</h1><br></br>
                        <h2>Juliette Flan</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box White gs_reveal">

                        <h1>skisen</h1><br></br>
                        <h2>Arthur Adam</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box Pantone gs_reveal">

                        <h1>Supporters</h1><br></br>
                        <h2>Nicolas Duval</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                    <div className="box White gs_reveal">

                        <h1>Flechette</h1><br></br>
                        <h2>Jules Mancini</h2>
                        <h2 className="PasDisponible">Disponible prochainement</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}