import { IEvent } from '../libs/sanity/queries';
import Moment from 'react-moment';
import Link from './ui-components/Link';
import BlockContent from '@sanity/block-content-to-react';
import { Modal } from 'react-responsive-modal';
import moment from 'moment';
import { useMemo } from 'react';
import { BsClock } from 'react-icons/bs';

interface IProps {
  currentEvent: IEvent;
  onClose: () => void;
}

const EventModal = ({
  currentEvent: { start, end, links, title, description },
  onClose,
}: IProps): JSX.Element => {
  const isSameDay = useMemo(() => {
    return moment(start).date() === moment(end).date();
  }, [start, end]);

  return (
    <Modal
      open
      onClose={onClose}
      center
      classNames={{
        modal: 'min-w-300 inline-flex flex-col gap-2',
      }}
    >
      <h1>{title}</h1>
      <p className="text-sm flex gap-1 items-center">
        <BsClock />
        <Moment format="DD.MM, HH:mm">{start}</Moment> -{' '}
        {isSameDay ? (
          <Moment format="HH:mm">{end}</Moment>
        ) : (
          <Moment format="DD.MM, HH:mm">{end}</Moment>
        )}
      </p>
      {links?.length && (
        <div>
          <h2>Links:</h2>
          <ul>
            {links.map(({ label, url }) => {
              return (
                <li key={url}>
                  <Link href={url} label={label} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div>
        <h2>Description:</h2>
        <BlockContent blocks={description} />
      </div>
    </Modal>
  );
};

export default EventModal;
