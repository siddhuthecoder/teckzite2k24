import Button from "../../components/Button";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <main
      className="w-full min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('../../../home.jpg')" }}
    >
      <Header />
      <div className="pt-24 flex items-center justify-center">
        <Button text="Home" />
      </div>
    </main>
  );
};

export default Home;
