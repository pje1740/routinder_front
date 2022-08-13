export type CalendarType = 'monthly' | 'weekly';

export interface StickerStamp {
  routineName: string;
  routineIconLink: string;
}

export interface Day {
  day: number;
  stickerStamps: StickerStamp[];
}

export interface NumberDate {
  year: number;
  month: number;
  day: number;
}
