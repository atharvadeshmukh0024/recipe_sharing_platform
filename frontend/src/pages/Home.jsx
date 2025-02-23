const images = [
  "https://plus.unsplash.com/premium_photo-1711387455354-91a8a26cd61c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/635943868/photo/cooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=eZIXnAk8FHUVdEBi52GQJd50paQrHLB-t2S_Q2bq_ZE=",
  "https://images.unsplash.com/photo-1627907228175-2bf846a303b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D"
];

const titles = ["Innovative Learning", "Tech Revolution", "Future Insights"];
const descriptions = [
  "Explore cutting-edge learning methods and stay ahead in technology.",
  "The rise of modern technologies shaping the future of industries.",
  "Gain insights into the latest advancements and innovations."
];

const Home = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1606914469661-9cbb2fc99bda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container my-5">
        <div className="row justify-content-center">
          {images.map((img, index) => (
            <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-4" key={index}>
              <div
                className="card shadow-lg border-0 rounded-4 overflow-hidden"
                style={{ width: "18rem", minWidth: "280px" }}
              >
                <img
                  src={img}
                  className="card-img-top img-fluid"
                  alt={titles[index]}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-primary">{titles[index]}</h5>
                  <p className="card-text text-muted">{descriptions[index]}</p>
                  <button className="btn btn-outline-primary w-100">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Home;
