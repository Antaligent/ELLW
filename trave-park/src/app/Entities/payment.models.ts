export interface Payment {
  id: string;
  userId: string;
  amount: number;
  date: Date;
  isPaid: boolean;
}
