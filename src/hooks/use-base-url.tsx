const useBaseUrl: React.FC = () => {
  const baseUrl: string = location.href.includes("localhost")
    ? "http://localhost:8888/portfolio"
    : "https://craigbauer.dev";

  return baseUrl;
};

export default useBaseUrl;
