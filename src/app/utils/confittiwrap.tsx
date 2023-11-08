import Confetti from 'react-confetti';

interface ConfettiProps {
  width: number;
  height: number;
}

const ConfettiWrapper: React.FC<ConfettiProps> = ({ width, height }) => {
  return (
    <Confetti
      width={width}
      height={height}
    />
  );
};

export default ConfettiWrapper;
