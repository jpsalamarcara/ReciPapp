import { Material } from "../../models/mMaterial";
import { ReqBid } from "../../models/mGenerator";

export const C_LIST_MATERIAL: Array<Material> = [
    {
        id: 1,
        description: "Plástico",
        unit: "Kg",
        valueMiddle: 200,
        image: "plastic.png"
    },
    {
        id: 2,
        description: "Vidrios",
        unit: "Kg",
        valueMiddle: 100,
        image: "glass.png"
    },
    {
        id: 3,
        description: "Cartón",
        unit: "Kg",
        valueMiddle: 150,
        image: "paper.png"
    },
    {
        id: 4,
        description: "Orgánicos",
        unit: "Kg",
        valueMiddle: 250,
        image: "organic.png"
    }
];

export const C_LIST_OFFERS: Array<ReqBid> = [
    {
        idGenerator: 123,
        idProduct: 1,
        quantity: 23,
        collectionDate: new Date(2018, 7, 12),
        rangeHours: '08:00 - 09:00',
        latitude: 4.683557,
        longitude: -74.04885
    },
    {
        idGenerator: 65,
        idProduct: 2,
        quantity: 12,
        collectionDate: new Date(2018, 7, 18),
        rangeHours: '16:00 - 18:00',
        latitude: 4.707193,
        longitude: -74.061942
    },
    {
        idGenerator: 973,
        idProduct: 3,
        quantity: 90,
        collectionDate: new Date(2018, 8, 4),
        rangeHours: '06:00 - 08:00',
        latitude: 4.736059,
        longitude: -74.066954
    },
    {
        idGenerator: 738,
        idProduct: 4,
        quantity: 39,
        collectionDate: new Date(2018, 8, 5),
        rangeHours: '06:00 - 07:30',
        latitude: 4.747761,
        longitude: -74.100003
    },
    {
        idGenerator: 912,
        idProduct: 1,
        quantity: 50,
        collectionDate: new Date(2018, 7, 30),
        rangeHours: '12:00 - 13:00',
        latitude: 4.759394,
        longitude: -74.041423
    },
    {
        idGenerator: 675,
        idProduct: 4,
        quantity: 73,
        collectionDate: new Date(2018, 7, 28),
        rangeHours: '20:00 - 22:00',
        latitude: 4.553021,
        longitude: -74.140814
    }

];

