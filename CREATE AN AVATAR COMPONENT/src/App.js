import "./styles.css";
const userDetails = {
  avtar_url: "https://avatars.githubusercontent.com/u/95065465?v=4",
  name: "Md Talib Ansari !"
};
function Avtar(props) {
  const { avtar_url, name } = props;
  const style = {
    borderRadius: "50%",
    border: "1px solid",
    boxShadow: "rgba(0, 0, 0, 0.80) 0px 5px 17px",
    padding: "0.15rem"
  };
  return (
    <div>
      <img style={style} src={avtar_url} width="170px" alt="logo" />
      <h3>{name}</h3>
    </div>
  );
}

function Button() {
  return <button className="btn">{userDetails.name} click me</button>;
}

export default function App() {
  return (
    <div className="App">
      <Avtar {...userDetails} />
      <Button />
    </div>
  );
}
