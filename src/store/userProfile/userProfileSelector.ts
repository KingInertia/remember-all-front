import type { RootState } from '../store';
import type { User } from '@/types/types';

export const selectUserNotesHistory = (state: RootState) =>
  state.userProfile.user?.notes_history ?? [];