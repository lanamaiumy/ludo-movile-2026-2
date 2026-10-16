import { User } from '../types/User';
import api from './api';

type AuthRecord = {
  id: string;
  email: string;
  child_name?: string;
  max_volume?: number;
  session_time?: number;
};

type AuthResult = {
  token: string;
  user: User;
};

function mapRecord(record: AuthRecord): User {
  return {
    id: record.id,
    email: record.email,
    childName: record.child_name ?? 'Ana',
    maxVolume: record.max_volume ?? 1,
    sessionTime: record.session_time ?? 10,
  };
}

export async function authenticate(email: string, password: string): Promise<AuthResult> {
  const response = await api.post('/api/collections/users/auth-with-password', {
    identity: email,
    password,
  });
  return { token: response.data.token, user: mapRecord(response.data.record) };
}
