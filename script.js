document.addEventListener("DOMContentLoaded", () => {
  const callElevator3 = document.getElementById("callElevator3");
  const callElevator2 = document.getElementById("callElevator2");
  const callElevator1 = document.getElementById("callElevator1");
  const callElevatort = document.getElementById("callElevatort");
  const btnT = document.getElementById("btnT");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  const elevator = document.querySelector(".elevator");
  let currentPosition = () => {
    elevator.style.top = "49px";
  };
  currentPosition();
  const elevtorYPosition = [
    { ground: 679 },
    { first: 469 },
    { second: 259 },
    { therth: 49 },
  ];

  const CallElevator = (floor) => {
    const selectedLevel = elevtorYPosition.find((level) =>
      level.hasOwnProperty(floor)
    );
    let positionActualy = parseInt(elevator.style.top);

    if (positionActualy != selectedLevel[floor]) {
      let newPositionLevel = `${selectedLevel[floor]}px`;

      console.log("Nova posição: " + newPositionLevel);

      elevator.style.top = `${newPositionLevel}`;
      console.log(`Elevador movido para o andar '${floor}'`);
    } else {
      console.log("O elevador já está no andar!");
    }
  };

  const SelectedLevel = (floor) => {
    let positionActualy = parseInt(elevator.style.top);
    const selectedLevel = elevtorYPosition.find((level) =>
      level.hasOwnProperty(floor)
    );
    console.log("Position: " + selectedLevel[floor]);

    if (positionActualy != selectedLevel[floor]) {
      let newPositionLevel = `${selectedLevel[floor]}px`;

      console.log("Nova posição: " + newPositionLevel);

      elevator.style.top = `${newPositionLevel}`;
      console.log(`Elevador movido para o andar '${floor}'`);
    } else {
      console.log("O elevador já está no andar!");
    }
  };

  btnT.addEventListener("click", () => SelectedLevel("ground"));
  btn1.addEventListener("click", () => SelectedLevel("first"));
  btn2.addEventListener("click", () => SelectedLevel("second"));
  btn3.addEventListener("click", () => SelectedLevel("therth"));

  callElevatort.addEventListener("click", () => CallElevator("ground"));
  callElevator1.addEventListener("click", () => CallElevator("first"));
  callElevator2.addEventListener("click", () => CallElevator("second"));
  callElevator3.addEventListener("click", () => CallElevator("therth"));
});
