const app = {
  title: 'Indecision App',
  options: [],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const user = {
  name: 'Ryan',
  age: 33,
  location: 'Washington, DC',
};

const getLocation = location => {
  if (location) return <p>Location: {location}</p>;
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

// render takes 2 args => 1) JSX to render, 2) DOM element you'd like to render
ReactDOM.render(template, appRoot);
