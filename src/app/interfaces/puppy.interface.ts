export interface IPuppy {
  id: number;
  name: string;
  origin?: string;
  history?: string;
  life_span: string;
  bred_for?: string;
  temperament: string;
  breed_group?: string;
  description?: string;
  country_code?: string;
  image: Partial<IImage>;
  height: Partial<IEight>;
  weight: Partial<IEight>;
  reference_image_id: string;
}

export interface IEight {
  metric: string;
  imperial: string;
}

export interface IImage {
  id: string;
  url: string;
  width: number;
  height: number;
}
