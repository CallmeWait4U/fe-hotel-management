export const formatPrice = (price: number | string) => {
  if (typeof price !== "number") {
    return typeof price !== "string" ? "" : price; // Handle the case where the input is not a number
  }
  
  // Convert the number to a string
  const priceStr = price.toString();
  
  // Use a regular expression to add dots as thousand separators
  return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
  