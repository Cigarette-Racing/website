export const fadeAnimationProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
  transition: {
    opacity: { duration: 0.4 },
  },
}
