interface IProps extends HasChildren {
  onClick: () => void;
}

const LinkButton = ({ children, onClick }: IProps): JSX.Element => {
  return (
    <button onClick={onClick} className="inline-block text-primary">
      {children}
    </button>
  );
};

export default LinkButton;
