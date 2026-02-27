function Football() {
  const shoot = (message, event) => {
    alert(message);
    console.log("Event Type:", event.type);
  };

  return (
    <button onClick={(event) => shoot("Goal!!! ⚽", event)}>
      Take the Shot!
    </button>
  );
}

export default Football;