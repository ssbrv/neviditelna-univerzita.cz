export const parseBoolean = (value: string | undefined): boolean => {
  return value?.toLowerCase() === "true";
};
