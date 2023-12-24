exports.isPropertyMissing = (value) => {
  if (value === "" || value === " " || value === null || value === undefined) {
    return true;
  }
  return false;
};

exports.formatStringURLParamaterForDB = (value) => {
  return `'${value}'`;
};
