import { PLAY, NEXT, PREV} from '../actions/play';

export default function playEd(state=0, action){
  switch(action.type){
    case PLAY:
      return state = 100;
    case NEXT:
      return state-1;
    case PREV:
      return state-1;
    default:
      return state;
  }
}
