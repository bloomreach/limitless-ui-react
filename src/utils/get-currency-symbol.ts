export const getCurrencySymbol = (currency: string = 'USD', locale: string = 'en-US'): string => {
  try {
    // Use the currency display in a sample format to get the symbol
    const formattedCurrency = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(1);

    // Extract the symbol by removing the numeric part
    const symbol = formattedCurrency.replace(/[0-9.,\s]/g, '');
    return symbol;
  } catch (error) {
    console.error("Invalid locale or currency code", error);
    return '';
  }
}
