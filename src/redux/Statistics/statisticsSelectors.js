import { createSelector } from '@reduxjs/toolkit';

export const selectStatsInfo = state => state.stats.info;

export const selectStatsIsLoading = state => state.stats.isLoading;

export const selectStatsConsumedWater = createSelector(
  [selectStatsIsLoading, selectStatsInfo],
  (isLoading, info) => {
    if (isLoading) return 0;

    let counter = 0;
    const keys = Object.keys(info);

    for (const key of keys) {
      if (key === 'water') {
        for (const entry of info[key]) {
          counter = counter + entry.water;
        }
      }
    }

    return counter;
  }
);
