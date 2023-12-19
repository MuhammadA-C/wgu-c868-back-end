exports.isPropertyMissing = (value) => {
  if (value === "" || value === " " || value === null || value === undefined) {
    return true;
  }
  return false;
};
