import { IEvent } from '../libs/sanity/queries';
import { useState, Fragment } from 'react';
import EventModal from './EventModal';
import LinkButton from './ui-components/LinkButton';

interface IProps {
  events: IEvent[];
}

const TbaEventList = ({ events }: IProps): JSX.Element => {
  const [currentEvent, setCurrentEvent] = useState<IEvent | null>(null);

  if (!events?.length) return <></>;

  // @ts-ignore
  return (
    <div className="mt-2 text-center border p-1 rounded">
      <h1>Unknown dates (TBA)</h1>
      <div>
        {events.map((event, i, arr) => {
          const isLast = i === arr.length - 1;
          return (
            <Fragment key={event.title}>
              <LinkButton onClick={() => setCurrentEvent(event)}>
                {event.title}
              </LinkButton>
              {!isLast && ', '}
            </Fragment>
          );
        })}
      </div>
      {currentEvent && (
        <EventModal
          // @ts-ignore
          currentEvent={currentEvent}
          onClose={() => setCurrentEvent(null)}
        />
      )}
    </div>
  );
};

export default TbaEventList;
