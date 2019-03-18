import { createSelector } from 'reselect'

const getFirst = state => state[0]
const getLast = state => state[-1]

export const getFirsAndLast = createSelector(
  getFirst,
  getLast,
  (first, last) => ({ first, last })
)
