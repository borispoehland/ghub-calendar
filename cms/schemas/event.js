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
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'start',
      title: 'Event start time (your local time)',
      type: 'datetime',
    },
    {
      name: 'end',
      title: 'Event end time (your local time)',
      type: 'datetime',
    },
    {
      name: 'type',
      title: 'Event type',
      type: 'reference',
      to: [{ type: 'eventType' }],
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
