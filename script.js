document.addEventListener("DOMContentLoaded", () => {
  const btnUp3 = document.getElementById("btnUp3");
  const btnDown3 = document.getElementById("btnDown3");
  const btnUp2 = document.getElementById("btnUp2");
  const btnDown2 = document.getElementById("btnDown2");
  const btnUp1 = document.getElementById("btnUp1");
  const btnDown1 = document.getElementById("btnDown1");
  const btnUpt = document.getElementById("btnUpt");

  const elevator = document.querySelector(".elevator");
  const currentPosition = () => {
    elevator.style.top = "679px";
  };
  currentPosition();

  const moveElevatorUp = () => {
    const step = 210;
    const elevorPosition = parseInt(elevator.style.top);

    if (elevorPosition <= 679 && elevorPosition >= 259)
      elevator.style.top = `${elevorPosition - step}px`;
  };

  const moveElevatorDown = () => {
    const step = 210;
    const elevorPosition = parseInt(elevator.style.top);

    if (elevorPosition >= 49 &&elevorPosition <= 469)
      elevator.style.top = `${elevorPosition + step}px`;
  };


  btnUpt.addEventListener("click", moveElevatorUp);
  btnDown1.addEventListener("click", moveElevatorDown);
});
