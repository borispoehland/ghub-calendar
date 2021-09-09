export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event name',
      type: 'string',
    },
    {
      name: 'start',
      title: 'Event start time (UTC)',
      type: 'datetime',
    },
    {
      name: 'end',
      title: 'Event end time (UTC)',
      type: 'datetime',
    },
    {
      name: 'links',
      title: 'Event useful links (website, whitepaper, medium article, ...)',
      type: 'array',
      of: [{ type: 'eventLink' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'eventBlockContent',
    },
  ],
};
