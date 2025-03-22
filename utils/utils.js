export const showModal = (id) => {
  document.getElementById(id).showModal();
};

export const closeModal = (id) => {
  document.getElementById(id).close();
};

export const captitalize = (string) => {
  if (!string) return "";
  return string[0].toUpperCase() + string.slice(1);
};

export const isLessThanOneDay = (lastChangeDate) => {
  if (lastChangeDate === 0) return false;
  const lastChange = new Date(lastChangeDate);
  const today = new Date();
  const diff = Math.abs(today - lastChange);
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diffDays <= 1;
};
