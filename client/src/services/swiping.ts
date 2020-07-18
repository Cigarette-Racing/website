/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

/**
 * Check the offset and velocity of a swipe action and fire the appropriate
 * callback based on a swipe confidence threshold.
 */
export const determineSwipeAction = ({
  offset,
  velocity,
  onSwipeLeft,
  onSwipeRight,
}: {
  offset: number
  velocity: number
  onSwipeLeft: () => void
  onSwipeRight: () => void
}) => {
  const swipe = swipePower(offset, velocity)
  if (swipe < -swipeConfidenceThreshold) {
    onSwipeLeft()
  } else if (swipe > swipeConfidenceThreshold) {
    onSwipeRight()
  }
}
