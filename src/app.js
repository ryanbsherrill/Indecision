const app = {
  title: 'Indecision App',
  subtitle: 'The Subtitle',
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

const user = {
  name: 'Ryan',
  // age: 33,
  location: 'DC',
};

const getLocation = location => {
  if (location) return <p>Location: {location}</p>;
};

const templateTwo = (
  <div>
    <h1>{user.name? user.name: 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

// Render method on ReactDOM takes 2 args =>
// 1) JSX to render
// 2) DOM element where you'd like to render

ReactDOM.render(templateTwo, appRoot);
