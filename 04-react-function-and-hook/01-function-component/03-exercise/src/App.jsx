function App() {
  return (
    <div>
      <img
        id="img-profile"
        src="https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"
        alt=""
      />
      <Info />
      <Social />
    </div>
  );
}

function Info() {
  let name = "Henry Cavill";
  let bio = "I am superman";
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
}

function Social() {
  return (
    <div>
      <a href="https://www.facebook.com" target="_blank" rel="n">
        Facebook
      </a>
      <a href="https://twitter.com" target="_blank" rel="n">
        Twitter
      </a>
    </div>
  );
}

export default App;
