export interface Notification {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  subject: string;
  date: string;
  unread?: boolean;
  link?: {
    label: string;
    url: string;
  };
  message?: {
    text: string;
    url: string;
  };
  picture?: {
    src: string;
    alt: string;
    url: string;
  };
}
