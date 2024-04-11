import { useState, useEffect } from "react";
import "./loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2 seconds of loading time

    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <div>Your content here</div>
  );
};

export default Loader;
