const Blob = ({ width = "100%", height = "100%" }) => {
    return (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className="blob"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
            <stop stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M11.6,-22.8C14.1,-18.7,14.5,-13.6,20,-9.7C25.5,-5.7,36.2,-2.9,35.7,-0.3C35.2,2.3,23.6,4.6,16.6,5.9C9.5,7.2,7,7.6,5,10.3C3,13,1.5,18.2,0.4,17.5C-0.8,16.9,-1.6,10.5,-7.5,10C-13.5,9.6,-24.5,15.1,-26.6,14.4C-28.6,13.7,-21.5,6.9,-19,1.5C-16.5,-3.9,-18.5,-7.9,-20.1,-14.9C-21.7,-21.9,-23,-31.9,-19.5,-35.4C-16.1,-39,-8.1,-36,-1.7,-33C4.6,-30,9.2,-26.9,11.6,-22.8Z"
          transform="translate(50 50)"
          style={{ transition: "all 0.3s ease 0s" }}
        ></path>
      </svg>
    );
  };
  
  export default Blob;
  