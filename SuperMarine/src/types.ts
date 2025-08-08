export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface verifyOtpRequest {
  email: string;
  otp: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  username: string;
  email: string;
  user_id: number;
}

export type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  mobileImage?: string;
};

export interface SlideWithMobile extends Slide {
  mobileImage: string;
}

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

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  number_of_persons: number;
}

export interface gallery {
  title: string;
  image: string;
  description: string;
}

export interface heroCarousel {
  title: string;
  subtitle: string;
  image: string;
}

export interface service {
  title: string;
  image: string;
  description: string;
  points: string[];
}

export interface about {
  title: string;
  image: string;
}

export interface vehicle {
  unique_id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  capacity: number;
  price: number;
  duration: number;
  discount: number;
}