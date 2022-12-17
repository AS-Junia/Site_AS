import "./Association.css"
import Image_Sport_Collectif from './image/Sport_Collectif.png'
import Image_Sport_Individuel from './image/Sport_Individuel.png'
import {useState} from 'react';
import { gsap } from "gsap";
import { useEffect, useRef} from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import {Link} from "react-router-dom"
import J$, { post } from "jquery"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)




export default function Association(){
    
    const [datasSport, setDatasSport] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    let allSport = document.querySelectorAll(".longbox")
    let tab = []

 
    
    useEffect(() => {
        let allSport = document.querySelectorAll(".longbox")
        for(let i = 0; i < allSport.length; i++){
            let Sport = {
                Titre : allSport[i].firstChild.textContent,
                Lien : allSport[i].getAttribute("alt"),
                Color : allSport[i].getAttribute("color")
            }
            tab.push(Sport)
            console.log(Sport)
        }
        console.log(allSport)
        setDatasSport(tab)
        console.log(tab)
        console.log(datasSport)
        console.log("Je suis là")
    }, []);

    
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value)

        console.log(value)
        console.log(datasSport)
        
        if(value.length > 0){
            gsap.to("#Choix",
            {display: 'none',},
            )
            gsap.to(".show",
            {display: 'none',},
            )
            gsap.to(".search__results",
            {display: 'flex',},
            )
        }else{
            gsap.to("#Choix",
            {display: 'flex',},
            )
            gsap.to(".show",
            {display: 'flex',},
            )
            gsap.to(".search__results",
            {display: 'none',},
            )
        }
    }
    
    //Animation cases Sports
    useEffect(() => {
        J$(".box").on("click",function(){
            const toActive = J$(this).attr("data-active");
            console.log("yo")
            
            gsap.fromTo(".active", 
            {display: 'none', y:0, duration: 0.5},
            {display: 'none', y:20, duration: 0.5}) 
            J$(".show.active").removeClass("active");
            
            gsap.fromTo(toActive,
                {display: 'flex', y:20, duration: 1},
                {display: 'flex', y:0, duration: 1}) 
            J$(toActive).addClass("active");
        });
    },[])

    

    return (

        <div id="Association">

            <div className="Show">
            
            <div id="Association_Title_SearchBar">
                <h1 id="Titre">Les Associations</h1>

                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Rechercher"
                    onChange={handleSearchTerm}
                />
            </div>
            
            

            <div id="Choix">
                <div className="box Pantone" id="Individuel" data-active=".IsIndividuel">
                    <h1>Individuelles</h1>
                    <img className="Image_Association" src={Image_Sport_Individuel} alt=""/>  
                </div>
                <div className="box Orange" id="Collectif" data-active=".IsCollectif">
                    <h1>Collectives</h1>
                    <img className="Image_Association" src={Image_Sport_Collectif} alt=""/>  
                </div>
            </div>

            <div className="BoxSports show IsIndividuel active">
            <Link className="text-link" to="/Association/Danse_Moderne">
                <div className="longbox" alt="Danse_Moderne" color="63, 42, 86">
                    <h1>Danse Moderne</h1>
        
                </div>
            </Link>
            <Link className="text-link" to="/Association/ZUMBA">
                <div className="longbox" alt="ZUMBA" color="63, 42, 86">
                    <h1>Zumba</h1>
        
                </div>
            </Link>
            <Link className="text-link" to="/Association/Equitation">
                <div className="longbox" alt="Equitation" color="63, 42, 86">
                    <h1>Equitation</h1>
        
                </div>
            </Link>
            <Link className="text-link" to="/Association/Triathlon">
                <div className="longbox" alt="Triathlon" color="63, 42, 86">
                    <h1>Triathlon</h1>
        
                </div>
            </Link>
            <Link className="text-link" to="/Association/Velo" >
                <div className="longbox" alt="Velo" color="63, 42, 86">
                    <h1>Vélo</h1>
        
                </div>
            </Link>
            <Link className="text-link" to="/Association/Natation">
                <div className="longbox" alt="Natation" color="63, 42, 86">
                    <h1>Natation</h1>
        
                </div>
            </Link>
            <Link className="text-link" to="/Association/SPRINT">
                <div className="longbox" alt="SPRINT" color="63, 42, 86">
                    <h1>Sprint</h1>
                    </div>
            </Link>
            <Link className="text-link" to="/Association/Escrime">
                <div className="longbox" alt="SPRINT" color="63, 42, 86">
                    <h1>Escrime</h1>
                    </div>
            </Link>
            
            </div>

            <div className="BoxSports show IsCollectif">
                <Link className="text-link" to="/Association/Handball">
                <div className="longbox" alt="Handball" color="255, 92, 57"> 
                    <h1>Handball</h1>
                    </div>
                </Link>
                <Link className="text-link" to="/Association/ISA_CHEERS">
                <div className="longbox" alt="ISA_CHEERS" color="255, 92, 57">
                    <h1>Isa Cheers</h1>
                    </div>
                </Link>
                <Link className="text-link" to="/Association/BADMINTON">
                <div className="longbox" alt="BADMINTON" color="255, 92, 57">
                    <h1>Badminton</h1>
                    </div>
                </Link>
                <Link className="text-link" to="/Association/FC_ISEN">
                <div className="longbox" alt="FC_ISEN" color="255, 92, 57">
                    <h1>Football Isen</h1>
                    </div>
                </Link>
                
                
            </div>

            {/* <div className="BoxSports">
            <Link className="text-link" to="/Association/Handball">
            <div className="collectif longbox" alt="Handball" color="255, 92, 57"> 
                <h1>Handball</h1>
                </div>
            </Link>
            <Link className="text-link" to="/Association/Equitation">
            <div className="individuel longbox" alt="Equitation" color="63, 42, 86">
                <h1>Equitation</h1>
    
            </div>
            </Link>
            <Link className="text-link" to="/Association/ISA_CHEERS">
            <div className="collectif longbox" alt="ISA_CHEERS" color="255, 92, 57">
                <h1>Isa Cheers</h1>
                </div>
            </Link>
            <Link className="text-link" to="/Association/Triathlon">
            <div className="individuel longbox" alt="Triathlon" color="63, 42, 86">
                <h1>Triathlon</h1>
    
            </div>
            </Link>
            <Link className="text-link" to="/Association/BADMINTON">
            <div className="collectif longbox" alt="BADMINTON" color="255, 92, 57">
                <h1>Badminton</h1>
                </div>
            </Link>
            <Link className="text-link" to="/Association/Danse_Moderne">
            <div className="individuel longbox" alt="Danse_Moderne" color="63, 42, 86">
                <h1>Danse Moderne</h1>
    
            </div>
            </Link>
            <Link className="text-link" to="/Association/Natation">
            <div className="individuel longbox" alt="Natation" color="63, 42, 86">
                <h1>Natation</h1>
    
            </div>
            </Link>
            </div> */}

            <div className="BoxSports search__results">
                {datasSport.filter((value) => {
                    return value.Titre.toLowerCase().includes(searchTerm.toLowerCase());
                })
                .map((value) => {
                    {console.log(value.Color)}
                    
                    return <Link className="text-link" to={`/Association/${value.Lien}`}>
                        <div className={value.Titre + " longbox search" } style={{background : `rgb(${value.Color})`}}>
                        <h1>{value.Titre}</h1>
                    </div>
                    </Link>
                })}  
            </div>

            </div>

        </div>

        
    )
}