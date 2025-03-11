import { useEffect, useState } from "react";
import PropTypes from "prop-types"; 

const LoadingScreen = ({ minLoadingTime = 50 }) => { 
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [minLoadingTime]);

  if (!show) return null; 

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-500 border-opacity-50"></div>
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  minLoadingTime: PropTypes.number, 
};

export default LoadingScreen;
