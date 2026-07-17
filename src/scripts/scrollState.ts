// Shared scroll value that freezes while a pinned "hold" is active.
// Anything that reacts to scroll depth (the gauge, eventually the
// background) should read getVirtualScrollY() instead of window.scrollY,
// so it pauses in sync with any active card hold.

let heldOffset = 0;   // total real scroll pixels "spent" by completed holds
let holding = false;
let holdStartY = 0;

export function beginHold() {
  holding = true;
  holdStartY = window.scrollY;
}

export function endHold(holdDistance: number) {
  holding = false;
  heldOffset += holdDistance;
}

export function getVirtualScrollY(): number {
  const raw = holding ? holdStartY : window.scrollY;
  return raw - heldOffset;
}
