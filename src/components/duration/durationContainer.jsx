import { connectWithId } from 'react-jplayer-utils';
import Duration from './duration';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  children: children || jPlayers[id].durationText,
  attributes,
});

export default connectWithId(mapStateToProps)(Duration);
