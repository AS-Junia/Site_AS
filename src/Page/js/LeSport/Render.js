import React from 'react';
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

export default function SetAssociation(props){

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  let {id} = useParams();

  console.log(id)

  return(
    <div id="SetAssociation">
      
      <h1 className="TitreASSO">{props.props[id].titre}</h1>

      {props.props[id].logo !== "" &&
        <img className="logoASSO  " src={require(`../../TousLesDossiers/${id}/image/${props.props[id].logo}`)} alt={`${props.props[id].titre}`}/>
      }

      <div className="DescriptionEtLogo">

        <div className="descriptionASSO">

          <div className="textDescription">{props.props[id].description}</div>

          <div className="DivHoraireLieu">
            <div className="Horaire">{props.props[id].horaire}</div>

            {props.props[id].horaire2 !== "" &&
              <div className="Horaire">{props.props[id].horaire2}</div>
            }
            {props.props[id].horaire3 !== "" &&
              <div className="Horaire">{props.props[id].horaire3}</div>
            }
            {props.props[id].horaire4 !== "" &&
              <div className="Horaire">{props.props[id].horaire4}</div>
            }
            {props.props[id].horaire5 !== "" &&
              <div className="Horaire">{props.props[id].horaire5}</div>
            }
            <p></p>
            {props.props[id].lieu !== "" &&
              <div className="Lieu">Adresse : {props.props[id].lieu}</div>
            }
            
          </div>
        </div>

        

      </div>
      
      <div className="photoASSO">

      {props.props[id].image[1] !== "" &&
        <img className="sizeImage1" src={require(`../../TousLesDossiers/${id}/image/${props.props[id].image[1]}`)} alt=""/>
      }
      {props.props[id].image[2] !== "" &&
        <img className="sizeImage1" src={require(`../../TousLesDossiers/${id}/image/${props.props[id].image[2]}`)} alt=""/>
      }
      {props.props[id].image[3] !== "" &&
        <img className="sizeImage1" src={require(`../../TousLesDossiers/${id}/image/${props.props[id].image[3]}`)} alt=""/>
      }
        
      </div>
      
      <div className="contactASSO">
        <div className="NomVpASSO">Responsable VP : {props.props[id].nomVP}</div>
        <div className="instaASSO" onClick={() => openInNewTab(`${props.props[id].contact}`)}>
          <div className="NomInstaASSO">Contact : {props.props[id].nomInsta}</div>
        </div>
      </div>

      <div className="EmptyForPhone"></div>
      

    </div>
  )
}
