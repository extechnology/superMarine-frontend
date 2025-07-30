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
