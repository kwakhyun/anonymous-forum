export const useGetTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const time =
    `0${date.getHours()}`.slice(-2) +
    ":" +
    `0${date.getMinutes()}`.slice(-2) +
    ":" +
    `0${date.getSeconds()}`.slice(-2);

  return `${year}.${month}.${day} ${time}`;
};
