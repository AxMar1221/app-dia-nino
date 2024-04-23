export const data = [
    { grupo: '2A', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '2B', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '2C', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '2D', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '2E', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '4A', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '4B', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '4C', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '4D', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '4E', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '6A', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '6B', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '6C', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '6D', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
    { grupo: '6E', cuerda: 0, uno: 0, ping_pong: 0, jenga: 0, gato: 0, karaoke: 0, palillos_chinos: 0, fifa: 0, smash: 0, avion: 0, voley_con_globos: 0, points: 0},
  ];
  
  // Eliminar el campo "points" de cada objeto
  const newData = data.map(item => {
    const { points, ...rest } = item;
    return rest;
  });
  
  // Agregar nuevos campos con valores aleatorios y calcular la suma en "points"
  const fields = ['cuerda', 'uno', 'pinpong', 'jenga', 'gato', 'karaoke', 'palillos chinos', 'fifa', 'smash', 'avion', 'voley con globos'];
  export const updatedData = newData.map(item => {
    const newItem = { ...item };
    let sum = 0;
    fields.forEach(field => {
      const randomValue = Math.floor(Math.random() * 30) + 1; // Valor aleatorio entre 1 y 30
      newItem[field] = randomValue;
      sum += randomValue;
    });
    newItem.points = sum; // Agregar la suma de los nuevos valores al campo "points"
    return newItem;
  });
  
  console.log(updatedData);
  