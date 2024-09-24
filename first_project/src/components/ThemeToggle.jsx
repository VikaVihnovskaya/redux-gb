import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from '../store/themeToggleReducer';

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state) => state.theme);
  const handleTheme = () => {
    dispatch(toggleTheme());
  }
  return (

      <div className={theme}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci consequatur
          delectus doloribus esse magnam rem, totam ullam. Animi fuga fugit id illo magnam magni odit quam
          suscipit vero voluptatem?</h1>
        <button onClick={handleTheme}>Сменить тему</button>
      </div>
  )
}
