import Button from "../../components/Button";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <main>
      <div
        className="absolute top-0 left-0 w-full z-2 min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('../../../home.png')" }}
      ></div>
      <Header />
      <div className="pt-24 flex items-center justify-center">
        <Button text="Home" />
      </div>
    </main>
  );
};

export default Home;
