import { Calendar as ReactCalendar, momentLocalizer } from 'react-big-calendar';
import { IEvent, IParsedEvent } from '../libs/sanity/queries';
import moment from 'moment-timezone';
import { useState } from 'react';
import EventModal from './EventModal';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

// @ts-ignore
const fullConfig = resolveConfig(tailwindConfig);

moment.tz.setDefault('UTC');

interface IProps {
  events: IEvent[];
}

const localizer = momentLocalizer(moment);

export const parseEvent = (event: IEvent): IParsedEvent => {
  const hasStartDate = Boolean(event.start);
  const hasEndDate = Boolean(event.end);
  return {
    ...event,
    start: new Date(event.start),
    end: hasEndDate ? new Date(event.end) : new Date(event.start),
    hasStartDate,
    hasEndDate,
  };
};

const Calendar = ({ events }: IProps): JSX.Element => {
  const [currentEvent, setCurrentEvent] = useState<IParsedEvent | null>(null);

  return (
    <>
      <ReactCalendar
        events={events.map(parseEvent)}
        localizer={localizer}
        className="flex-1 h-auto"
        onSelectEvent={(event) => setCurrentEvent(event)}
        eventPropGetter={(event) => {
          return {
            style: {
              backgroundColor:
                event?.type?.color ?? fullConfig?.theme?.colors?.purple['500'],
            },
          };
        }}
      />
      {currentEvent && (
        <EventModal
          currentEvent={currentEvent}
          onClose={() => setCurrentEvent(null)}
        />
      )}
    </>
  );
};

export default Calendar;
