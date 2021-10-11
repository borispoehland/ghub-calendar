export interface IEventLink {
  label: string;
  url: string;
}

interface IEventType {
  label: string;
  color: string;
}

interface ISlug {
  _type: string;
  current: string;
}

interface ICommonEvent {
  title: string;
  slug: ISlug;
  description: string;
  links: IEventLink[];
  type: IEventType;
}

export interface IEvent extends ICommonEvent {
  start: string;
  end: string;
}

export interface IParsedEvent extends ICommonEvent {
  start: Date;
  end: Date;
}

const eventFields = `
    title,
    slug,
    start,
    end,
    type->{color,label},
    description,
    links
`;

export const eventsQuery = `
{
  "dated": *[_type == "event" && defined(start)] {
    ${eventFields}
  },
  "tba": *[_type == "event" && !defined(start)] {
    ${eventFields}
  }
}`;
