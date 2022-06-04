/* eslint-disable @typescript-eslint/no-unused-vars */
import { format, intervalToDuration } from 'date-fns';

export function formatNumberWithSpaces(number: string): string {
  const [_, num, suffix] = number.match(/^(.*?)((?:[,.]\d+)?|)$/) ?? [];
  return `${num.replace(/\B(?=(?:\d{3})*$)/g, ' ')}${suffix}`;
}

export function formatEndOfWords(number: number, txt: string[]): string {
  const cases = [2, 0, 1, 1, 1, 2];
  return txt[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

export function calculateEndOfTransfer(date: string, duration: number): string {
  return format(new Date(new Date(date).getTime() + duration * 60000), 'HH:mm');
}

export function formatDurationToReadableTime(
  date: string,
  duration: number
): string {
  const dur = intervalToDuration({
    start: new Date(date),
    end: new Date(new Date(date).getTime() + duration * 60000),
  });

  const minutes = dur.minutes === 0 ? '' : `${dur.minutes}M`;
  return `${dur.hours}Ч ${minutes}`;
}
