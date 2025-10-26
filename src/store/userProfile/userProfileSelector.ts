import type { RootState } from '../store';
import type { User } from '@/types/types';

export const selectUserProfile = (state: RootState): User | null => state.userProfile.user;
