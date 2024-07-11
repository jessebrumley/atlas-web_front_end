function changeMode(size, weight, transform, background, color) {
  let styles = {
      fontSize: `${size}px`,
      fontWeight: weight,
      textTransform: transform,
      backgroundColor: background,
      color: color
  };

  return function() {
      document.body.style.fontSize = styles.fontSize;
      document.body.style.fontWeight = styles.fontWeight;
      document.body.style.textTransform = styles.textTransform;
      document.body.style.backgroundColor = styles.backgroundColor;
      document.body.style.color = styles.color;
  };
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const welcomeParagraph = document.createElement('p');
  welcomeParagraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(welcomeParagraph);

  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.addEventListener('click', spooky);
  document.body.appendChild(spookyButton);

  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark Mode';
  darkModeButton.addEventListener('click', darkMode);
  document.body.appendChild(darkModeButton);

  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream Mode';
  screamModeButton.addEventListener('click', screamMode);
  document.body.appendChild(screamModeButton);
}

main();
