import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <main>
      <Header />
      <div
        className="absolute top-0 left-0 w-full z-2 min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('../../../home.png')" }}
      ></div>
    </main>
  );
};

export default Home;
