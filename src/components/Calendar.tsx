import { Calendar as ReactCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { IEvent } from '../libs/sanity/queries';
import { useState } from 'react';
import EventModal from './EventModal';

interface IProps {
  events: IEvent[];
}

const localizer = momentLocalizer(moment);

const parseEvent = (event: IEvent) => ({
  ...event,
  start: new Date(event.start),
  end: new Date(event.end),
});

const Calendar = ({ events }: IProps): JSX.Element => {
  const [currentEvent, setCurrentEvent] = useState<IEvent | null>(null);

  return (
    <>
      <ReactCalendar
        events={events.map(parseEvent)}
        localizer={localizer}
        className="flex-1 h-auto"
        onSelectEvent={(event) => setCurrentEvent(event)}
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
