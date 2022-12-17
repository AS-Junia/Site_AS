import react from 'react'
import "./Contact.css"
import Image from "./Image/RueToul.PNG"
import Faq from 'react-faq-component';


export default function Contact(){

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function image(nom) {  
        //Créer une variable stockant le nom de l'image
        const NomImage = nom;

        return (      
            <img id={`${NomImage}`} src={require(`./Image/${NomImage}.png`)}/>   
        );  
    }

    const data = {
        title: "Les Réponses à tes questions",
        rows: [
          {
            title: "À quoi sert la licence ? Est-ce vraiment important de la prendre ? ",
            content: "Oui, elle te permet d’avoir accès à TOUS les sports et a des tarifs avantageux sur nos événements"
          },
          {
            title: "Quand on fait une commission a t’on besoin de la licence? ",
            content: "Oui grâce à elle tu as une assurance"
          }]
      }


    return (

        <div className="Page" id="CONTACT">

            <div id="FondQuestion">
                <h1>Notre Local</h1>

                <div id="TexteContact">
                    <p>Tu peux venir nous voir dans notre local situé au 20 rue de Toul</p>
                    <p>Le local est ouvert tous les jours de 17h à 19h sauf le week-end</p>
                    <p>Autrement tu peux nous contacter via les réseaux sociaux</p>
                    {/* <p>Si tu cherches le insta d'un de nos membres il faudra te débrouiller tous seul</p> */}
                </div>
            </div>
            <img id="RueToul" src={Image} alt=""/>
            
            {/* <div id="AllQuestion">
                <div id="TitreQuestion">Les Réponses à tes questions</div> */}
                <div>
                    <Faq data={data}
                    styles={{
                        bgColor: "white",
                        titleTextColor: "#3F2A56",
                        rowTitleColor: "#78789a",
                        rowTitleTextSize: '4vh',
                        rowContentColor: "#48484a",
                        rowContentTextSize: '4vh',
                        arrowColor: "black",
                        }} 
                    />
                </div>
                {/* <div className="questions">
                    <div className="visible-pannel">
                        <h2>Comment boire au local</h2>
                        <img src={croix} alt="croix"/>
                    </div>
                </div> 
            </div>*/}
            {/* <div id="AdresseToul">20 rue de Toul</div> */}
            <div id="InstaFaceBook">
                <div id="Insta" onClick={() => openInNewTab('https://www.instagram.com/as.junia/')}></div>
                <div id="FaceBook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100074811144805')}></div>
            </div>
            
        </div>
    )
}