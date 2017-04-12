import createHistory from 'history/createBrowserHistory';

const history = createHistory();
history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
});

export default history;
