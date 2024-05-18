// Function to generate a random position within the specified range
export const generateRandomCoordinates = () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return { x, y };
};
