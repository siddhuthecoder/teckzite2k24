import Header from "../../components/Header/Header";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <main className="pt-5 flex justify-center items-center w-100 h-[100vh]">
      <div
        className="absolute z-10 top-0 left-0 w-full min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('../../../home.png')",
          position: "fixed",
        }}
      ></div>
      <Header />
      <RegisterForm />
    </main>
  );
};

export default Register;
