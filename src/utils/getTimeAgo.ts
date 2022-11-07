import { DateTime } from 'luxon';

const getTimeAgo = (date: string): string | null =>
  DateTime.fromISO(date).setLocale('en').toRelative({
    style: 'short',
  });

export default getTimeAgo;
