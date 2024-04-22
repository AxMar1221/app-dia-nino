export const data = [
    { group: '2A', points: 100 },
    { group: '2B', points: 150 },
    { group: '2C', points: 120 },
    { group: '2D', points: 180 },
    { group: '2E', points: 90 },
    { group: '4A', points: 200 },
    { group: '4B', points: 130 },
    { group: '4C', points: 170 },
    { group: '4D', points: 140 },
    { group: '4E', points: 160 },
    { group: '6A', points: 110 },
    { group: '6B', points: 190 },
    { group: '6C', points: 80 },
    { group: '6D', points: 200 },
    { group: '6E', points: 70 },
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
  