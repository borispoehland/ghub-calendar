export default {
  name: 'eventLink',
  type: 'object',
  title: 'Event link',
  fields: [
    {
      type: 'string',
      name: 'label',
      title: 'Ressource name',
    },
    {
      type: 'url',
      name: 'url',
      title: 'Ressource URL',
    },
  ],
};
