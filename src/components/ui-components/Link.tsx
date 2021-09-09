import NextLink from 'next/link';

export interface ILink {
  href: string;
  label: string;
}

interface IProps extends ILink {}

const Link = ({ href, label }: IProps): JSX.Element => {
  return (
    <NextLink href={href}>
      <a target="__blank" className="text-primary">
        {label}
      </a>
    </NextLink>
  );
};

export default Link;
