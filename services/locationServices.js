const apiKey = "69e51d74a685081fc23e5d1188d95a16";

export const fetchLocations = async (query) => {
  if (!query) return [];

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    query
  )},fr&limit=5&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const locations = [];
    const seen = new Set();
    data.forEach((result) => {
      const { name, state, lat, lon } = result;
      const fullName = `${name}, ${state}`;
      if (!seen.has(fullName)) {
        locations.push({
          name,
          region: state || "",
          latitude: lat,
          longitude: lon,
        });
        seen.add(fullName);
      }
    });
    return locations;
  } catch (error) {
    console.error(error);
    return [];
  }
};
