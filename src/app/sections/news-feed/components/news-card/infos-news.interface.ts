export interface INewsInfos {
  img: string;
  title: string;
  content?: string;
  authorName: string;
  main?: boolean;
  authorInfos?: { img: string; authorName: string; occupation: string };
}
