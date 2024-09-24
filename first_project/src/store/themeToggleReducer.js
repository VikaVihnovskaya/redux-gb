const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = () => ({type: TOGGLE_THEME});

const initialState = {
  theme: 'light'
};

export const themeToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      state = {...state, theme: state.theme === 'light' ? 'dark' : 'light'};
      return state;
    default:
      return state;
  }
}