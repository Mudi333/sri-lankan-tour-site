import  { LatLngTuple } from "leaflet";


export type Tour = {
  id: string;
  name: string;
  color: string;
  stops: Stop[];
};
export type Stop = {
  name: string;
  latlng: LatLngTuple;
};