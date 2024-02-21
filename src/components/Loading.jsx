import HoneyComb from "../assets/honeycomb.svg";

const Loading = () => {
  return (
    <div className="loading">
      <h1>Loading...</h1>
      <div className="loading__image">
        <img src={HoneyComb} alt="loading" />
      </div>
    </div>
  );
};

export default Loading;
