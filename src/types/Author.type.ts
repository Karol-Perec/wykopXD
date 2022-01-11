type Sex = 'male' | 'female';

export interface Author {
  avatar: string;
  color: number;
  login: string;
  sex?: Sex;
}
