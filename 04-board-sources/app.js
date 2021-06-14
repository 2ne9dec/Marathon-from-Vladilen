const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = [
  '#7FFF00',
  '#20B2AA',
  '#00008B',
  '#FF00FF',
  'FFD700',
  '#FF1493',
  '#8B0000',
  '#D3D3D3',
  '#8A2BE2',
  '#000080',
  '#4682B4',
  '#FF4500',
  '#F0E68C',
  '#00FF7F',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
    return () => {
      removeEventListener('mouseover');
    };
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
    return () => {
      removeEventListener('mouseleave');
    };
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
