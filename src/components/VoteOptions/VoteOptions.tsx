import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes'

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      {(['good', 'neutral', 'bad'] as VoteType[]).map(type => (
        <button
          key={type}
          className={css.button}
          onClick={() => onVote(type)}
        >
          {type[0].toUpperCase() + type.slice(1)}
        </button>
      ))}
      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
