export const decodeJWT = (token: string) => {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    console.log(decoded);
    return decoded;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
}