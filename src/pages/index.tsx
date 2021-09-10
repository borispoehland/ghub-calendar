import { GetStaticPropsResult } from 'next';
import { eventsQuery, IEvent } from '../libs/sanity/queries';
import { getClient } from '../libs/sanity/sanity.server';
import Calendar from '../components/Calendar';
import TbaEventList from '../components/TBAEventList';

interface IEventsQueryProps {
  dated: IEvent[];
  tba: IEvent[];
}

interface IProps {
  events: IEventsQueryProps;
}

const Index = ({ events }: IProps): JSX.Element => {
  return (
    <>
      <Calendar events={events.dated} />
      <TbaEventList events={events.tba} />
    </>
  );
};

export async function getStaticProps({
  preview = process.env.NODE_ENV === 'development',
}): Promise<GetStaticPropsResult<IProps>> {
  const events = await getClient(preview).fetch(eventsQuery);
  return {
    props: { events },
    revalidate: 1,
  };
}

export default Index;
