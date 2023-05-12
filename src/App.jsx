// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import sprite from '../src/images/icons/sprite.svg';

export const App = () => {
  return (
    // <Provider store={store}>
    // <BrowserRouter>
    <>
      <h1>Test</h1>
      <svg>
        <use xlinkHref={`${sprite}#round`} />
      </svg>
    </>
    // </BrowserRouter>
    // </Provider>
  );
};
