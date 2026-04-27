
export default function Champp({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (value: string) => void }) {
  return (
    <input
      type="number"
      placeholder={placeholder}
      //placeholder est une prop qui permet d'afficher un texte dans le champ de texte lorsque celui-ci est vide, pour indiquer à l'utilisateur ce qu'il doit saisir. ici, c'est "1er opérande" ou "2ème opérande" selon le champ.
      value={value}
      // e.target.value = ce que l'utilisateur a tapé
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "20px",
        fontSize: "16px",
        width: "150px",
        border: "2px solid #764a4a",
        borderRadius: "20px"
      }}
    />
  );
}