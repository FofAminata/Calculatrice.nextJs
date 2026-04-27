// L'interface définit le "contrat" : ce que le parent DOIT envoyer
interface SelecteurProps {
  valeur: string;                 // L'opérateur choisi (+, -, etc.)
  onChange: (op: string) => void; // La fonction pour mettre à jour le state
}

export default function Selecteur({ valeur, onChange }: SelecteurProps) {
  return (
    <select
      value={valeur}
      // On récupère la valeur de l'événement et on l'envoie à la fonction onChange
      onChange={(e) => onChange(e.target.value)} 
      style={{
        padding: "10px",
        fontSize: "16px",
        borderRadius: "10px",
        //border: "0px solid #600f0f",
      }}
    >
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">×</option>
      <option value="/">÷</option>
    </select>
  );
}