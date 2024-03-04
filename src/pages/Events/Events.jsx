import ETWSCard from "../../components/Shared/ETWSCard";
import Style from "./Events.module.css";
const Events = () => {
  return (
    <>
    <h1>events</h1>
      <div className="flex flex-wrap max-sm:justify-center max-xl:justify-around justify-between">
        <ETWSCard />
        <ETWSCard />
        <ETWSCard />
        <ETWSCard />
        <ETWSCard />
        
      </div>
    </>
  );
};

export default Events;
