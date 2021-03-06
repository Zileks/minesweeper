import { useStyles } from './headerStyle';

interface Props {
  gameMessage: string;
}

export function Header({ gameMessage }: Props) {
  const classes = useStyles();

  const renderMessage = (message: string) => {
    return message !== 'OK' ? message : '';
  };

  return (
    <div className={classes.header}>
      <p className={classes.headText}>Minesweeper</p>
      <p className={classes.message} data-testid='show-message-paragraph'>
        {renderMessage(gameMessage)}
      </p>
    </div>
  );
}
