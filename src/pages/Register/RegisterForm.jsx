import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    college: "",
    year: "",
    gender: "",
    phoneNumber: "",
    idNumber: "",
    countries: "",
  };
  const [data, setData] = useState(initialData);
  const [signIn, setSignIn] = useState(true);
  const [next, setNext] = useState(true);
  const [error, setError] = useState(null);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch(
        "https://api.covid19india.org/state_district_wise.json"
      );
      const data = await response.json();
      const statesData = Object.keys(data).map((state) => state);
      setStates(statesData);
    } catch (error) {
      console.error("Error fetching states:", error);
      toast.error("Error fetching states");
    }
  };

  const fetchDistricts = async (state) => {
    try {
      const response = await fetch(
        "https://api.covid19india.org/state_district_wise.json"
      );
      const data = await response.json();
      const districtsData = Object.keys(data[state].districtData).map(
        (district) => district
      );
      setDistricts(districtsData);
    } catch (error) {
      console.error("Error fetching districts:", error);
      toast.error("Error fetching districts");
    }
  };

  const fetchCities = async (state, district) => {
    try {
      const response = await fetch(
        "https://api.covid19india.org/state_district_wise.json"
      );
      const data = await response.json();
      const citiesData = Object.keys(data[state].districtData[district].cities)
        .map((city) => data[state].districtData[district].cities[city])
        .flat();
      setCities(citiesData);
    } catch (error) {
      console.error("Error fetching cities:", error);
      toast.error("Error fetching cities");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.college === "" ||
      data.phoneNumber === "" ||
      data.idNumber === "" ||
      data.year === "" ||
      data.gender === ""
    ) {
      setError("All Fields are required");
      return;
    }

    if (data.phoneNumber.length !== 10) {
      setError("Phone Number must be 10 characters");
      return;
    }

    setNext(true);
  };

  const onFailure = (error) => {
    console.log("Error: " + error);
    toast.error("Error while signing with Google");
  };

  const onSuccess = async (res) => {
    console.log(res);
    const { given_name, family_name, email, picture } = res.profileObj;
    setData({
      ...data,
      firstName: given_name,
      lastName: family_name,
      email,
      img: picture,
    });
    setSignIn(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <section className="z-30 w-full">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-[380px] mx-auto mb-5 border border-primary rounded-md backdrop-filter backdrop-blur-lg px-3 py-2 flex justify-center items-center"
      >
        {!signIn && (
          <div className="my-16 mx-auto">
            <GoogleLogin
              clientId={import.meta.env.VITE_APP_GOOGLE_OAUTH_CLIENTID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              buttonText="Sign up with Google"
            />
          </div>
        )}
        {signIn && (
          <div className="py-2 w-full flex justify-center items-center flex-col">
            <h4 className="font-semibold my-2 text-xl">Register</h4>
            {!next && (
              <>
                <div className="mb-3 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <input
                    type="text"
                    id="firstName"
                    value={data.firstName}
                    name="firstName"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="First Name"
                    required
                  />
                  {/* Last Name */}
                  <input
                    type="text"
                    id="lastName"
                    value={data.lastName}
                    name="lastName"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="Last Name"
                    required
                  />
                </div>
                {/* College */}
                <div className="mb-3 w-[90%]">
                  <input
                    type="text"
                    id="college"
                    value={data.college}
                    name="college"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="College"
                    required
                  />
                </div>
                {/* Phone Number and ID Number */}
                <div className="mb-3 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="phoneNumber"
                    value={data.phoneNumber}
                    name="phoneNumber"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="text"
                    id="idNumber"
                    value={data.idNumber}
                    name="idNumber"
                    onChange={handleChange}
                    className="bg-transparent border-gray-300 text-white text-base block w-full px-1 py-1.5 text_input"
                    placeholder="Id Number"
                    required
                  />
                </div>
                {/* Year */}
                <div className="mb-3 w-[90%]">
                  <select
                    id="year"
                    value={data.year}
                    name="year"
                    onChange={handleChange}
                    className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <option value="">--Select Year--</option>
                    <option value="PUC-1">PUC 1</option>
                    <option value="PUC-2">PUC 2</option>
                    <option value="E1">E1</option>
                    <option value="E2">E2</option>
                    <option value="E3">E3</option>
                    <option value="E4">E4</option>
                  </select>
                </div>
                {/* Gender */}
                <div className="w-[90%] mb-1 text-left">Gender</div>
                <div className="mb-1 w-[80%] mr-[10%] flex items-center justify-between">
                  <div className="flex items-center mb-4">
                    <input
                      id="male"
                      type="radio"
                      value="male"
                      name="gender"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="male"
                      className="ms-2 text-base font-medium text-[#eee]"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="female"
                      type="radio"
                      value="female"
                      name="gender"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="female"
                      className="ms-2 text-base font-medium text-[#eee]"
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="others"
                      type="radio"
                      value="others"
                      name="gender"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="others"
                      className="ms-2 text-base font-medium text-[#eee]"
                    >
                      Others
                    </label>
                  </div>
                </div>
              </>
            )}
            {next && (
              <>
                <div className="mb-3 w-[90%]">
                  <select
                    id="state"
                    name="state"
                    value={data.state}
                    onChange={(e) => {
                      handleChange(e);
                      fetchDistricts(e.target.value);
                    }}
                    className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <option value="">--Select State--</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                {districts.length > 0 && (
                  <div className="mb-3 w-[90%]">
                    <select
                      id="district"
                      name="district"
                      value={data.district}
                      onChange={(e) => {
                        handleChange(e);
                        fetchCities(data.state, e.target.value);
                      }}
                      className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
                      style={{ borderBottom: "1px solid #eee" }}
                    >
                      <option value="">--Select District--</option>
                      {districts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {cities.length > 0 && (
                  <div className="mb-3 w-[90%]">
                    <select
                      id="city"
                      name="city"
                      value={data.city}
                      onChange={handleChange}
                      className="bg-transparent text_input text-base focus:ring-transparent focus:border-transparent block w-full px-1 py-2 text-[#eee]"
                      style={{ borderBottom: "1px solid #eee" }}
                    >
                      <option value="">--Select City--</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="my-3 w-[90%]">
                  <label
                    className="block mb-1 text-sm font-medium text-[#eee]"
                    htmlFor="file_input"
                  >
                    Upload Id Card
                  </label>
                  <input
                    className="block w-full text-sm text-white border border-[#eee] rounded-sm cursor-pointer bg-transparent"
                    id="file_input"
                    type="file"
                  />
                </div>
                <div className="flex items-center my-3 w-[90%] justify-start">
                  <input
                    id="terms"
                    type="checkbox"
                    value="terms"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="terms"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Accept Terms and Conditions
                  </label>
                </div>
              </>
            )}
            {error && <div className="w-[90%]">{error}</div>}
            <div className="w-[90%] mt-2 flex justify-end">
              <button
                type="button"
                className="text-white bg-[rgba(152,65,255,0.8)] hover:bg-primary font-medium rounded-md text-base px-6 py-1.5 me-2 mb-2"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default RegisterForm;
