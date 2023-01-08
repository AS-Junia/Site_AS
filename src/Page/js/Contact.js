import react from 'react'
import "../css/Contact.css"

export default function Contact(){

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function image(nom, point, where = "Contact") {  
        //Créer une variable stockant le nom de l'image
        const NomImage = nom;
    
        return (      
            <img id={`${NomImage}`} src={require(`../IMAGE/${where}/Image/${NomImage}.${point}`)}/>   
        );  
    }

    return (

        <div className="Page" id="CONTACT">

            <h1 className="PourNous">Pour nous contacter</h1>

            <div id="FondQuestion">
                <h1>Notre Local</h1>

                <div id="TexteContact">
                    <p>Tu peux venir nous voir dans notre local situé au 20 rue de Toul</p>
                    <p>Le local est ouvert tous les jours de 17h à 19h sauf le week-end</p>
                    <p>Autrement tu peux nous contacter via les réseaux sociaux</p>
                    {/* <p>Si tu cherches le insta d'un de nos membres il faudra te débrouiller tous seul</p> */}
                </div>
            </div>
            <div>{image("RueToul", "PNG")}</div>
            
            {/* <div id="AdresseToul">20 rue de Toul</div> */}
            <div id="InstaFaceBook">
                <div id="Insta" onClick={() => openInNewTab('https://www.instagram.com/as.junia/')}></div>
                <div id="FaceBook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100074811144805')}></div>
            </div>
            
        </div>
    )
}