export const selectUser = state => state.auth.user;

export const selectToken = state => state.auth.token;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

// export const selectForgotPassword = state => state.auth.user.password;

// export const selectUpdateAvatar = state => state.auth.user.avatarURL;