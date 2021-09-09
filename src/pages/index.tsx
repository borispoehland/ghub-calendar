import { GetStaticPropsResult } from 'next';
import { eventsQuery, IEvent } from '../libs/sanity/queries';
import { getClient } from '../libs/sanity/sanity.server';
import Calendar from '../components/Calendar';

interface IProps {
  events: IEvent[];
}

const Index = ({ events }: IProps): JSX.Element => {
  return <Calendar events={events} />;
};

export async function getStaticProps({
  preview = process.env.NODE_ENV === 'development',
}): Promise<GetStaticPropsResult<IProps>> {
  const events = await getClient(preview).fetch(eventsQuery);
  return {
    props: { events },
    revalidate: 5,
  };
}

export default Index;
