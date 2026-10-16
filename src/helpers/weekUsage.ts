import { LocalSession } from '../types/LocalSession';

export function buildWeekUsage(sessions: LocalSession[]): boolean[] {
  const week = [false, false, false, false, false, false, false];
  for (const session of sessions) {
    const day = new Date(session.date).getDay();
    week[(day + 6) % 7] = true;
  }
  return week;
}
