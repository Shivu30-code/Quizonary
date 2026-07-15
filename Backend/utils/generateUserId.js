const generateUserId = (fullName) => {

    const name = fullName
      .replace(/\s+/g, "")
      .toUpperCase()
      .slice(0, 3);

    const randomPart = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    return `${name}-${randomPart}`;
};

export default generateUserId;