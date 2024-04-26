export const fetchData = async () => {
    try {
      const response = await fetch('https://dia-nino-app-73fd3-default-rtdb.firebaseio.com/Juegos.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      const data = jsonData;
      console.log(data);
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  

export const processGameData = (jsonData) => {
  const groupsData = jsonData.grupo; // Accede a la data de los grupos
  const groupsArray = [];

  for (const groupKey in groupsData) {
    if (Object.hasOwnProperty.call(groupsData, groupKey)) {
      const groupData = groupsData[groupKey];
      let totalPoints = 0;

      for (const gameKey in groupData) {
        if (Object.hasOwnProperty.call(groupData, gameKey)) {
          const points = groupData[gameKey];
          totalPoints += points;
        }
      }

      groupsArray.push({ grupo: groupKey, points: totalPoints });
    }
  }

  return groupsArray;
};

