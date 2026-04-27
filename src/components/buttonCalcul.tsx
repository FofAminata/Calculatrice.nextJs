export default function BoutonCalcul({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "20px 20px",
        fontSize: "15px",
        backgroundColor: "#515446",
        color: "white",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer"
      }}
    >
      Calcul
    </button>
  );
}