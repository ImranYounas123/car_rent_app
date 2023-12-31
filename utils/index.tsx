import { CarCardProps, FilterProps } from "@/types";

export const calculateCarRentPrice = (city_mpg: number, year: number) => {
  let basePerDay = 50;
  let mileAgeFactor = 0.1;
  let ageFacor = 0.1;

  const mileAgeFactorRate = city_mpg * mileAgeFactor;
  const ageFacorRate = (new Date().getFullYear() - year) * ageFacor;
  const totalRate = basePerDay + mileAgeFactorRate + ageFacorRate;

  return totalRate.toFixed(0);
}


export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": "647e3850ebmshda3adfc90048e25p14938ejsnd47074e1bdcd" || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}
export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);
  // Set the specified search parameter to the given value 
  searchParams.set(type, value);
  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}


export async function generateCarImageUrl(filters: CarCardProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = filters;

  url.searchParams.append('customer', "" || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}