import { IParsedEvent } from '../libs/sanity/queries';
import Moment from 'react-moment';
import Link from './ui-components/Link';
import BlockContent from '@sanity/block-content-to-react';
import { Modal } from 'react-responsive-modal';
import moment from 'moment';
import { BsClock } from 'react-icons/bs';
import { GrDocumentVerified } from 'react-icons/gr';

interface IProps {
  currentEvent: IParsedEvent;
  onClose: () => void;
}

const EventModal = ({
  currentEvent: {
    start,
    end,
    links,
    title,
    description,
    type,
    hasEndDate,
    hasStartDate,
  },
  onClose,
}: IProps): JSX.Element => {
  return (
    <Modal
      open
      onClose={onClose}
      center
      classNames={{
        modal: 'min-w-300 inline-flex flex-col gap-2',
      }}
    >
      <h1 className="pr-10">{title}</h1>
      {type?.label && type?.color && (
        <p className="flex gap-1 items-center">
          <GrDocumentVerified />
          <span
            className="underline"
            style={{
              textDecorationColor: type.color,
            }}
          >
            {type.label}
          </span>
        </p>
      )}
      {hasStartDate && (
        <p className="flex flex-wrap gap-1 items-center">
          <BsClock />
          <Moment utc format="Do MMM hh:mm A">
            {start}
          </Moment>
          {hasEndDate && (
            <>
              -{' '}
              {moment(start).date() === moment(end).date() ? (
                // same day
                <Moment utc format="hh:mm A">
                  {end}
                </Moment>
              ) : (
                // different day
                <Moment utc format="Do MMM hh:mm A">
                  {end}
                </Moment>
              )}
            </>
          )}
          (UTC)
        </p>
      )}
      {links?.length && (
        <>
          <hr />
          <ul className="list-disc list-inside">
            {links.map(({ label, url }) => {
              return (
                <li key={url}>
                  <Link href={url} label={label} />
                </li>
              );
            })}
          </ul>
        </>
      )}
      {description && (
        <>
          <hr />
          <BlockContent blocks={description} />
        </>
      )}
    </Modal>
  );
};

export default EventModal;
