export const formatPrice = (price: number, currency: string = 'USD', locale: string = 'en-US') => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(price);
  } catch(e) {
    return price;
  }
};
