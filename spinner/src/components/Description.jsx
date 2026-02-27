function Description(props) {
  const isAdvanced = props.level === "Level 6";

  return (
    <p>
      {props.name} - {props.level}{" "}
      {isAdvanced ? "🔥 Advanced" : "📘 Intermediate"}
    </p>
  );
}

export default Description;