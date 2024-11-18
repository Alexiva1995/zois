export interface Signal {
  id: number;
  name: string;
  buyLimit: number;
  sellLimit: number;
  buyStop: number;
  sellStop: number;
  stopLoss: number;
  takeProfit: number;
  image?: string;
  instructions?: string;
  dailyAverage: number;
  totalSignals: number;
}
