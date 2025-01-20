import './chip.css';
import type { ChipType } from '@/types/chip';

interface ChipProps {
  item: ChipType;
  pressed?: boolean;
  index: number;
  onToggle: (willChangePressedIndex: number) => void;
}

function Chip({ item, pressed = false, onToggle, index }: ChipProps) {
  const handleToggle = () => {
    console.log('대천재 명재휘');
    console.log(index);
    if (index > -1) {
      onToggle(index);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    console.log(e.code);
    switch (e.code) {
      case 'Enter':
      case 'Space':
        handleToggle();
    }
  };

  return (
    <span
      role="button"
      className="Chip"
      tabIndex={0}
      aria-pressed={pressed}
      aria-disabled={pressed}
      onClick={handleToggle}
      onKeyDown={handleKey}
    >
      {item.label}
    </span>
  );
}

export default Chip;
