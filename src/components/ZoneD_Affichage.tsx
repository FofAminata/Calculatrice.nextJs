    // Composant affichage résultat
    interface ResultatProps {
      valeur: number | null; // résultat à afficher, ou null si pas encore calculé
    }
export default function Resultat({ valeur }: ResultatProps) {
// Si la valeur est null, on n'affiche rien
  if (valeur === null) {
    return null;
  }
  return (
    <h2 style={{ fontSize: "28px", color: "#610f48", marginTop: "20px" }}>
      = {valeur}
    </h2>
  );
}