export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Event name',
      type: 'string',
    },
    {
      name: 'startTime',
      title: 'Event start time (UTC)',
      type: 'datetime',
    },
    {
      name: 'endTime',
      title: 'Event end time (UTC)',
      type: 'datetime',
    },
    {
      name: 'links',
      title: 'Event useful links (website, whitepaper, medium article, ...)',
      type: 'array',
      of: [{ type: 'eventLink' }],
    },
  ],
};
