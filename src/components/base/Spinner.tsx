import styled from 'styled-components';

const StyledSpinner = styled.div<{ $color: 'grey' | 'blue'; $size?: string }>`
  border: 3px solid;
  border-color: ${(props) => (props.$color === 'grey' ? 'var(--grey200)' : 'var(--blue100)')};
  border-top-color: ${(props) => (props.$color === 'grey' ? 'var(--grey700)' : 'var(--blue600)')};
  border-radius: 50%;
  height: ${(props) => props.$size || '14px'};
  width: ${(props) => props.$size || '14px'};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

interface SpinnerProps {
  color: 'grey' | 'blue';
}

const Spinner = (props: SpinnerProps) => {
  const { color } = props;
  return <StyledSpinner $color={color} />;
};

export default Spinner;
