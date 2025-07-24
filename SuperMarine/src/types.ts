export type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
};


export interface ServiceData {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  discount?: number; 
  image: string;
}

export interface ServiceGridProps {
  serviceData: ServiceData[];
}