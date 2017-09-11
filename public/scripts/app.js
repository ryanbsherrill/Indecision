'use strict';

var app = {
  title: 'Indecision App',
  options: []
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

var user = {
  name: 'Ryan',
  age: 33,
  location: 'Washington, DC'
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

// render takes 2 args => 1) JSX to render, 2) DOM element you'd like to render
ReactDOM.render(template, appRoot);
