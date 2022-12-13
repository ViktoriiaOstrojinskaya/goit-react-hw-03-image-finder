import { ButtonEl } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonEl type="button" onClick={onClick}>
      Load more
    </ButtonEl>
  );
};
