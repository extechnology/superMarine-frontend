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
  id: number;
  mobileImage?: string | null;
}

export interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
  points: string[];
}

export interface about {
  title: string;
  image: string;
}

export interface AboutContent {
  title: string;
  image: string;
}

export interface Vehicle {
  id: number;
  unique_id: string;
  name: string;
  description: string;
  image: string;
  price: string; 
  discount: number;
  duration: string; 
  capacity: number;
  category: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
  featured: boolean;
  title: string;
}

export interface Numbers {
  experience: number;
  happy_customers: number;
  total_rides: number;
  image: string;
}

export interface JetSkiService {
  id: number;
  durationOptions: string[];
  pricePerPerson?: boolean;
}

export interface AboutContent {
  title: string;
  description: string;
  image: string;
}

export interface BookAdventure {
  subtitle: string;
  image: string;
  image2: string;
  created_at: string;
}

export interface ThrillMeetAdventure {
  image: string;
}


export interface Banner {
  image: string;
  created_at: string;
}