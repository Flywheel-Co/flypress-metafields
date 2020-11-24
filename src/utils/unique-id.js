const UniqueId = (prefix) => {
  const unique = Math.random().toString(36).substr(2, 5);

  return prefix + unique;
}

export default UniqueId;
