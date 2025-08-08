const BASE_URL = "https://schoozy.in/api";

export interface OlympiadRegistration {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  date_of_birth: string; // ISO date string
  email: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  class: string;
  school_name: string;
  board: string;
  school_address_line1: string;
  school_city: string;
  school_state: string;
  school_zip_code: string;
  medium: string;
  passport_photo_url: string;
  uid_aadhaar_url: string | null;
  school_id_url: string;
  subjects: string;
  created_at: string; // ISO date string
}

export interface School {
  id: number;
  full_name: string;
  address: string;
  dob: string; // ISO date string
  mobile_number: string;
  email: string;
  school_name: string;
  class: string;
  subject: string;
  created_at: string; // ISO date string
  father_name: string;
}

export interface Transaction {
  id: number;
  transection_id: string;
  user_id: string;
  payment_id: string;
  amount: number;
  payment_method: string;
  status: string;
  created_at: string; // ISO date string
}

export interface User {
  name: string;
  email: string;
  password?: string; // Sensitive, will be omitted or masked
  access_token: string | null;
  refresh_token: string | null;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  user_id: string;
  phone_number: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T[];
}

async function fetchData<T>(path: string): Promise<T[]> {
  try {
    const res = await fetch(`${BASE_URL}${path}`, { cache: 'no-store' });
    if (!res.ok) {
      console.error(`Failed to fetch data from ${path}: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const result: ApiResponse<T> | T[] = await res.json();
    // Check if the response has a 'data' key or is directly an array
    if (Array.isArray(result)) {
      return result;
    } else if (typeof result === 'object' && result !== null && 'data' in result && Array.isArray(result.data)) {
      return result.data;
    } else {
      // If it's a single object, wrap it in an array for table display
      return [result as T];
    }
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error);
    return []; // Return empty array on error
  }
}

export async function fetchRegistrations(): Promise<OlympiadRegistration[]> {
  return fetchData<OlympiadRegistration>("/admin/olympiad-registrations");
}

export async function fetchSchools(): Promise<School[]> {
  return fetchData<School>("/admin/schools");
}

export async function fetchTransactions(): Promise<Transaction[]> {
  return fetchData<Transaction>("/admin/transactions");
}

export async function fetchUsers(): Promise<User[]> {
  return fetchData<User>("/admin/users");
}

