const videogames = [
    "Sekiro",
    "Call of Duty",
    "Death Stranding",
    "Gears 5",
    "Devil May Cry"
  ];
  
  const randomString = () => {
    const string = videogames[Math.floor(Math.random() * videogames.length)];
    return string;
  };
  
  module.exports = randomString;