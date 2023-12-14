document.addEventListener('DOMContentLoaded', () => {
    const elevator = document.querySelector('.elevator');

    const moveElevator = (direction) => {
        const currentTop = parseInt(elevator.style.top) || 0;
        const step = 210; // Pode ajustar o valor conforme necessário

        if (direction === 'up') {
            elevator.style.top = `${currentTop - step}px`;
        } else if (direction === 'down') {
            elevator.style.top = `${currentTop + step}px`;
        }
    };

    // Adiciona ouvintes de eventos para cada botão
    document.getElementById('btnUp3').addEventListener('click', () => moveElevator('up'));
    document.getElementById('btnDown3').addEventListener('click', () => moveElevator('down'));

    document.getElementById('btnUp2').addEventListener('click', () => moveElevator('up'));
    document.getElementById('btnDown2').addEventListener('click', () => moveElevator('down'));

    document.getElementById('btnUp1').addEventListener('click', () => moveElevator('up'));
    document.getElementById('btnDown1').addEventListener('click', () => moveElevator('down'));

    document.getElementById('btnUpt').addEventListener('click', () => moveElevator('up'));
});
