export const GetAuth = (key) => {
  const itemString = localStorage.getItem(key);

  if (itemString) {
    try {
      return JSON.parse(itemString);
    } catch (error) {
      console.error(`Error parsing ${key} from local storage:`, error);
    }
  }

  return null;
};
