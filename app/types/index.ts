export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  description?: string;
  created_at?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
