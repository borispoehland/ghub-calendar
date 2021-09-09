import { ILink } from '../components/ui-components/Link';

export interface INavLink extends ILink {}

const getNavLinks = (): INavLink[] => [
  {
    href: '/admin',
    label: 'Add event',
  },
];

export default getNavLinks;
