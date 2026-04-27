"use client"; //indique à Next.js que ce composant est interactif (il utilise le navigateur de l'utilisateur). Indispensable pour useState et onClick.
import Image from "next/image";

import { useState } from "react";
import "./styles.css";
import Titre from "@/src/components/titre";
import BoutonCalcul from "@/src/components/buttonCalcul";
import Champ from "@/src/components/ChampsDeTete";
import ZoneDAffichage from "@/src/components/ZoneD_Affichage";
import Liste from "@/src/components/ListeDeroulante";

export default function Home() {

  // Les states
  const [operande1, setOperande1] = useState("");
  const [operande2, setOperande2] = useState("");
  const [operateur, setOperateur] = useState("+");
  const [resultat, setResultat] = useState<number | null>(null);

  // La fonction calcul
  // On convertit les strings en nombres décimaux avec parseFloat, puis on effectue l'opération selon l'opérateur choisi. Enfin, on stocke le résultat dans le state resultat.
  function calculer()
   {


    // Conversion string → nombre via parseFloat
            const a = parseFloat(operande1);
            const b = parseFloat(operande2);
            let res: number=0; // res est la variable qui va stocker le résultat du calcul que j'initialise à 0 pour éviter les erreurs 
          // avce un switch pour plus de clarté
          
        if (operateur === "/" && b === 0) 
          {  
                  alert("Division par zéro impossible !");
                  return;
          }
          
         if (operateur ==="+")
         
             res = a + b;
          else if (operateur === "-")
                    res = a - b;
                  else if (operateur === "*")
                    res = a * b;
                  else if (operateur === "/")
                    res = a / b; 
          
          
          if (operateur === "*" && (a === 0 || b === 0)) 
            {
              alert("Multiplication par zéro donne zéro !");
            }

          
              /*
                  // switch (operateur) 
                  {
                    case "+": res = a + b; break;
                    case "-": res = a - b; break;
                    case "/": res = a / b; break;
                    default: res = 0;
                  }   case "*": res = a * b; break;
          
        */
       setResultat(res); // On met à jour le state avec le résultat final  }
   }

   //les affichages

  return (
    <div className="App">
      <Titre />

      {/* 1er champ */} 
    <Champ
        
        placeholder="1er opérande"
        value={operande1}
        //onChange permet de mettre à jour le state operande1 à chaque fois que l'utilisateur tape quelque chose dans le champ. e.target.value correspond à ce que l'utilisateur a tapé.
        //onChange est une fonction qui prend un événement en paramètre (ici, l'événement de changement du champ de texte) et qui met à jour le state operande1 avec la nouvelle valeur du champ de texte.
        onChange ={setOperande1} />
        

      {/* Sélecteur d'opérateur */}
      <Liste
        valeur={operateur}
        onChange={setOperateur}
      />

      {/* 2ème opérande */} 
      <Champ
        placeholder="2ème opérande"
        value={operande2}
        onChange={setOperande2}
      />
     

      {/* Bouton calcul */}
      <BoutonCalcul onClick={calculer} />

      {/* Résultat qu'est la zone d'affichage */}

    <ZoneDAffichage valeur={resultat} />
       </div>
  );
}
