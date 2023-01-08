import "../css/NavBar.css"
import {Link} from "react-router-dom"
import $ from "jquery";
import Logo_As from "../IMAGE/Logo_Junia.png"
import { gsap } from "gsap";

export default function NavBar(){

    
  function image(nom, point, where = "NavBar") {  
    //Créer une variable stockant le nom de l'image
    const NomImage = nom;

    return (      
        <img id={`${NomImage}`} src={require(`../IMAGE/${where}/Image/${NomImage}.${point}`)}/>   
    );  
  }

    $(document).ready(function() {
        $(".deroule").mouseover(function () {
            $("#PageDark").css("visibility", "visible")
        });

        $(".deroule").mouseout(function () {
            $("#PageDark").css("visibility", "hidden")
        });

        $(".Open").mouseover(function () {
            $(this.childNodes[1]).css("visibility", "visible")
        });

        $(".Open").mouseout(function () {
            $(this.childNodes[1]).css("visibility", "hidden")
        });

        $(".sousMenu").click(function(){
            if(window.innerWidth < 490){
            $(".ForHamburger")[0].classList.toggle('OpenHamburger')
            if($(".ForHamburger").hasClass("OpenHamburger")){
                $('body').css("position", "fixed")
            }
            else{
                $('body').css("position", "relative")
            }
            }
            $("#PageDark").css("visibility", "hidden")
            
        })

        $("#Hamburger").click(function(){
            $(".ForHamburger")[0].classList.toggle('OpenHamburger')
            if($(".ForHamburger").hasClass("OpenHamburger")){
                $('body').css("position", "fixed")
            }
            else{
                $('body').css("position", "relative")
            }
            
        });

        //Fonction qui ouvre le menu déroulant de Sport sur la version téléphone
        $(".Open").click(function(){
            if(window.innerWidth < 490){
                
                switch ($(".deroule").hasClass("active")) {
                    case true:
                        gsap.fromTo(".derouleForPhone", 
                        {
                            y:20, duration: 0.5,
                            position: "absolute"},
                        {y:0, duration: 0.5, position: "relative"})
                        $(".deroule").removeClass("active");
                        gsap.fromTo(".deroule", 
                        {
                            display: 'block',
                            y:0, duration: 0.5,
                            visibility: "visible",
                            position: "relative"},
                        {y:-30, duration: 0.5,display: 'none'})
                        $(".deroule").removeClass("active");
                        
                        
                        break;

                    case false:
                        gsap.fromTo(".derouleForPhone", 
                        {
                            y:-20, duration: 0.5,
                        },
                        {y:20, duration: 0.5, position: "relative"})
                        gsap.fromTo(".deroule", 
                        {display: 'none', y:-30, duration: 0.5, opacity: 0},
                        {
                            display: 'block',
                            y:0, duration: 0.5,
                            opacity: 1,
                            position: "relative"})
                        $(".deroule").addClass("active");
                        
                        break;
                
                    default:
                        console.log("je bug")
                        break;
                }   
            } 
        });
    
    });

    return (
        <div>
        <header>
            {/* Logo Header */}
            <img id="LogoAS" src={Logo_As} alt=""/>
            <div>{image("Hamburger", "png")}</div>
            {/* Lien vers les autres pages */}
            <nav className="ForHamburger">
                <ul>
                    {/* Presentation */}
                    <li className="sousMenu"><Link to="/">Présentation</Link></li>
                    {/* Menu déroulant sur Le Sports */}
                    <li className="Open"><a>Le Sport</a>
                        {/* ul qui apparait quand on survole Le Sport*/}
                        <ul className="deroule">
                            {/* Les Association */}
                            <li className="sousMenu"><Link to="/Association">Les Associations</Link></li>
                            {/* Les Commissions */}
                            <li className="sousMenu"><Link to="/Commission">Les Commissions</Link> </li>
                        </ul>
                    </li>
                    {/* Nos Projets */}
                    <div className="derouleForPhone">
                        <li className="sousMenu"><Link to="/Projets_future">Nos Projets</Link></li>
                        {/* Nous Contacter */}
                        <li className="sousMenu"><Link to="/Contact">Nous Contacter</Link></li>
                        {/* Faq */}
                        <li className="sousMenu"><Link to="/Faq">Faq</Link></li>
                    </div>
            </ul>
            </nav>
        </header>
        <div id="PageDark"></div>
        </div>
    )
}
