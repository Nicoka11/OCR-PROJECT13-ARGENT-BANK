export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  data?: {
    body: {
      token: string;
    };
    message: string;
    status: number;
  };
  error?: {
    data: {
      message: string;
      status: number;
    };
    status: number;
  };
}

export interface Auth {
  token: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignUpResponse {
  status: 0;
  message: string;
  body: {
    id: string;
    email: string;
  };
}
