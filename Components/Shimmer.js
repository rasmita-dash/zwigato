const Shimmer = () => {
  return (
    <div className="shimmer-container">
      Shimmer
      {Array.from(10).map((element, index) => {
        <div key={index} className="shimmer">Loading...</div>;
      })}
    </div>
  );
};

export default Shimmer;
