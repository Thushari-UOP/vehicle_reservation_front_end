exports.decodeToken = function decodeToken() {
  const token = localStorage.getItem("token");
  const parts = token.split(".");

  const body = JSON.parse(atob(parts[1]));

  return body;
};
