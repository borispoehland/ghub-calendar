export interface IEventLink {
  label: string;
  url: string;
}

interface IEventType {
  label: string;
  color: string;
}

interface ICommonEvent {
  title: string;
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
  hasStartDate: boolean;
  hasEndDate: boolean;
}

const eventFields = `
    title,
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
