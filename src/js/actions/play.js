export const PLAY = 'PLAY';
export const NEXT = 'NEXT';
export const PREV = 'PREV';


export function play() {
  return {
    type: PLAY
  }
}

export function next() {
  return {
    type: NEXT
  }
}

export function prev() {
  return {
    type: PREV
  }
}
