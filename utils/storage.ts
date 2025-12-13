/**
 * @deprecated Use setAccessToken from @/lib/api-utils instead
 */
export const setAccessTokenToLocalStorage = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("accessToken", token);
  }
};

/**
 * @deprecated Use getValidToken from @/lib/api-utils instead
 */
export const getAccessTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
};