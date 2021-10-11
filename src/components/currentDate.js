export function getCurrentDate() {
  const separator = '-';
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <div>{`${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`}</div>
  );
}
