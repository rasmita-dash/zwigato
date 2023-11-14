const Shimmer = () => {
  return (
    <div className="shimmer-container">
      shimmer
      {Array.from(10).map((element, index) => {
        return <div key={index} className="shimmer"></div>;
      })}
    </div>
  );
};

export default Shimmer;
