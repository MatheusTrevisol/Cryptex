export async function fetchCoins() {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false");
  const data = await response.json();

  return data;
};