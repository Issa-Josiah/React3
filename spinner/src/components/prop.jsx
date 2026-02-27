function Car(props) {
  const brand = "Ford";
  const model = "Mustang";

  const myobj = {
    color: props.color,
    year: 2024,
  };

  const styles = {
    color: myobj.color,
    backgroundColor: "lightyellow",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div style={styles}>
      <h2>I am a {myobj.color} Car!</h2>
      <p>
        It is a {brand} {model} ({myobj.year})
      </p>
    </div>
  );
}

export default Car;