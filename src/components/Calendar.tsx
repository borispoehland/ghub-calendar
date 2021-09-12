import { Calendar as ReactCalendar, momentLocalizer } from 'react-big-calendar';
import { IEvent, IParsedEvent } from '../libs/sanity/queries';
import moment from 'moment';
import { useState } from 'react';
import EventModal from './EventModal';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import { convertDateToUTC } from '../utils/dateUtils';

// @ts-ignore
const fullConfig = resolveConfig(tailwindConfig);

interface IProps {
  events: IEvent[];
}

const localizer = momentLocalizer(moment);

const parseEvent = (event: IEvent) => {
  return {
    ...event,
    start: convertDateToUTC(new Date(event.start)),
    end: convertDateToUTC(new Date(event.end ?? event.start)),
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
