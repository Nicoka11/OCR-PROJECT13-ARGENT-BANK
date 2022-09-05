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

export interface UserProfilePayload {}

export interface UserProfile {
  data?: {
    body: UserProfileBody;
    message: string;
    status: number;
  };
}

export interface UserProfileBody {
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  updatedAt: string;
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
