import type { RootState } from '../store';
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectIsAuntificated = (state: RootState) => state.auth.isAuntificated;