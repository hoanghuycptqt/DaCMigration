import type { User } from '../types';

export const CURRENT_USER: User = {
  name: 'Truong Hoang Huy (MS/EET22)',
  ntid: 'HUT3THH',
  email: 'hut3thh@bosch.com',
  role: 'ADMIN',
  status: 'Active',
  lastLogin: '2024-03-20 14:00',
  totalMigrations: 28,
};

export const ALL_USERS: readonly User[] = [
  CURRENT_USER,
  {
    name: 'Tran Thi B',
    ntid: 'TTB2DEF',
    email: 'ttb2def@bosch.com',
    role: 'USER',
    status: 'Active',
    lastLogin: '2024-03-20 13:15',
    totalMigrations: 22,
  },
  {
    name: 'Le Van C',
    ntid: 'LVC3GHI',
    email: 'lvc3ghi@bosch.com',
    role: 'USER',
    status: 'Active',
    lastLogin: '2024-03-19 16:00',
    totalMigrations: 18,
  },
  {
    name: 'Dao Minh X',
    ntid: 'DMX4JKL',
    email: 'dmx4jkl@bosch.com',
    role: 'USER',
    status: 'Blocked',
    lastLogin: '2024-02-15 10:00',
    totalMigrations: 3,
  },
  {
    name: 'Hoang Van E',
    ntid: 'HVE5MNO',
    email: 'hve5mno@bosch.com',
    role: 'USER',
    status: 'Active',
    lastLogin: '2024-03-18 09:00',
    totalMigrations: 12,
  },
] as const;
