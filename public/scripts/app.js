'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'The Subtitle'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

var user = {
  name: 'Ryan',
  // age: 33,
  location: 'DC'
};

var getLocation = function getLocation(location) {
  if (location) return React.createElement(
    'p',
    null,
    'Location: ',
    location
  );
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

// Render method on ReactDOM takes 2 args =>
// 1) JSX to render
// 2) DOM element where you'd like to render

ReactDOM.render(templateTwo, appRoot);
