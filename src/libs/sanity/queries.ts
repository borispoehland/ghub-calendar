export interface IEventLink {
  label: string;
  url: string;
}

export interface IEvent {
  start: Date;
  end: Date;
  title: string;
  description: string;
  links: IEventLink[];
}

export const eventsQuery = `
  *[_type == "event"] {
    title,
    start,
    end,
    description,
    links
  }`;
