import "./NavBar.css"
import {Link} from "react-router-dom"
import $ from "jquery";
import Logo_As from "../IMAGE/Logo_Junia.png"

export default function NavBar(){

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
            $(this.parentElement).css("visibility", "hidden")
            $("#PageDark").css("visibility", "hidden")
        })
    });
    
    return (
        <div>
        <header>
            <img id="LogoAS" src={Logo_As} alt=""/>
            <nav>
                <ul>
                    <li className="caseMenu"><Link to="/">Présentation</Link></li>
                    <li className="caseMenu Open"><a>Le Sport</a>
                        <ul className="deroule">
                            <li className="caseMenu sousMenu"><Link to="/Association">Les Associatisons</Link></li>
                            <li className="caseMenu sousMenu"><Link to="/Commission">Les Commissions</Link> </li>
                            {/* <li className="caseMenu sousMenu"><Link to="/Resultat">Les Résultats</Link> </li> */}
                        </ul>
                    </li>
                    <li className="caseMenu Open"><Link to="/Projets_future">Nos Projets</Link>
                        {/* <ul className="deroule">
                            <li className="caseMenu sousMenu"></li>
                            <li className="caseMenu sousMenu"><Link to="/Projets_recap">Récap des Projets</Link></li>
                        </ul> */}
                    </li>
                    {/* <li className="caseMenu Open"><Link to="/NosAfterWorks">Nos AfterWorks</Link>
                        <ul className="deroule">
                            <li className="caseMenu sousMenu"><Link to="/AfterWorks_future">AfterWorks à venir</Link></li>
                            <li className="caseMenu sousMenu"><Link to="/AfterWorks_recap">Récap des AfterWorks</Link></li>
                        </ul>
                    </li> */}
                    <li className="caseMenu"><Link to="/Contact">Nous Contacter</Link></li>
                </ul>
            </nav>
        </header>
        <div id="PageDark"></div>
        </div>
    )
}
