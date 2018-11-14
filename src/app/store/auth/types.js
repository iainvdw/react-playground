import { createAsyncTypes } from '../Utils';

// Export three default async helpers
export const AUTH_USER_ASYNC = createAsyncTypes('AUTH_USER', ['LOGOUT']);
