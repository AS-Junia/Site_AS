import "../css/Faq.css"
import Faq from 'react-faq-component';


export default function Contact(){

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    // function image(nom) {  
    //     //Créer une variable stockant le nom de l'image
    //     const NomImage = nom;

    //     return (      
    //         <img id={`${NomImage}`} src={require(`./Image/${NomImage}.png`)}/>   
    //     );  
    // }

    const data = {
        rows: [
          {
            title: "À quoi sert la licence ? Est-ce vraiment important de la prendre ? ",
            content: "Oui, elle te permet d’avoir accès à TOUS les sports et à des tarifs avantageux sur nos événements"
          },
          {
            title: "Quand on fait une commission a t’on besoin de la licence? ",
            content: "Oui grâce à elle tu as une assurance"
          }]
      }


    return (

        <div className="Page" id="FAQ">

            <div>

                <h1 id="TitreFAQ">Les Réponses à tes questions</h1>
                <Faq data={data}
                styles={{
                    bgColor: "none",
                    rowTitleColor: "#3F2A56",
                    rowContentColor: "#48484a",
                    arrowColor: "black",
                    }} 
                />
            </div>
                        
        </div>
    )
}