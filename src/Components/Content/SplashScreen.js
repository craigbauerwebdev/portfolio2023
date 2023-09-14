const { useEffect, useState } = wp.element;

const SplashScreen = ({ baseUrl }) => {
  const [top, setTop] = useState(0);
  const [message, setMessage] = useState("loading");

  useEffect(() => {
    let i = 0;
    setTimeout(() => {
      // change setTimeout to when data is loaded
      setTop("-100vh");
    }, 5000);
    const messages = [
      "Fetching Data",
      "Testing Code",
      "Compiling Code",
      "Building UI",
    ];
    setInterval(() => {
      setMessage(messages[i]);
      i++;
    }, 1000);
  }, []);

  return (
    <>
      <div class="intro" style={{ top: top }}>
        <div class="intro-logo">
          <img
            class="pulse"
            alt="CB logo"
            src={`${baseUrl}/wp-content/themes/portfolio/images/cb-logo1.png`}
          />
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
