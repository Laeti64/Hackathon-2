export type TCar = {
  id: string;
  year: number;
  imgUrl: string;
  imgUrl2: string;
  imgUrl3: string;
  grayCardUrl: string;
  description: string;
  autonomie: number;
  mileAge: number;
  nbPlace: number;
  batterie: number;
  puissance: string;
  capacity: number;
  nbPortes: number;
  barCodeUrl: string;
  registration: string;
  isAvailable: boolean;
  autonomous: boolean;
  tempsCharge: number;
  prixKm: number;
  prixJour: number;
  categoryId: string;
  brandId: string;
  connectorId: string;
  modelId: string;
  model: TModel;
};

export type TModel = {
  id: string;
  name: string;
  brandId: string;
  brand: TBrand;
};

export type TBrand = {
  id: string;
  name: string;
};
