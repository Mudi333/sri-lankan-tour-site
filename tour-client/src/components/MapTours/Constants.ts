import type {Tour} from "./Types"

export const TOURS: Tour[] = [
  {
    id: "couple_3d",
    name: "3 Days • Couple • Luxury",
    color: "#DAA520",
    stops: [
      { name: "Colombo", latlng: [6.9271, 79.8612] },
      { name: "Galle", latlng: [6.0535, 80.221] },
      { name: "Mirissa", latlng: [5.9485, 80.458] },
    ],
  },
  {
    id: "family_5d",
    name: "5 Days • Family",
    color: "#1E90FF",
    stops: [
      { name: "Colombo", latlng: [6.9271, 79.8612] },
      { name: "Kandy", latlng: [7.2906, 80.6337] },
      { name: "Nuwara Eliya", latlng: [6.9497, 80.7891] },
      { name: "Ella", latlng: [6.8667, 81.046] },
      { name: "Mirissa", latlng: [5.9485, 80.458] },
    ],
  },
  {
    id: "friends_5d",
    name: "5 Days • Friends / Group",
    color: "#2ECC71",
    stops: [
      { name: "Negombo", latlng: [7.2083, 79.8358] },
      { name: "Sigiriya", latlng: [7.9557, 80.7596] },
      { name: "Dambulla", latlng: [7.8569, 80.6492] },
      { name: "Kandy", latlng: [7.2906, 80.6337] },
      { name: "South Coast", latlng: [6.1248, 80.124] },
    ],
  },
  {
    id: "solo_5d",
    name: "5 Days • Solo • Budget",
    color: "#E74C3C",
    stops: [
      { name: "Colombo", latlng: [6.9271, 79.8612] },
      { name: "Galle", latlng: [6.0535, 80.221] },
      { name: "Matara", latlng: [5.9549, 80.554] },
      { name: "Ella", latlng: [6.8667, 81.046] },
      { name: "Colombo", latlng: [6.9271, 79.8612] },
    ],
  },
  {
    id: "custom",
    name: "Customise Your Trip",
    color: "#7F8C8D",
    stops: [
      { name: "Colombo", latlng: [6.9271, 79.8612] },
      { name: "Anuradhapura", latlng: [8.3114, 80.4037] },
      { name: "Jaffna", latlng: [9.6615, 80.0255] },
    ],
  },
];