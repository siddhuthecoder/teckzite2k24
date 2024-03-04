import ETWSCard from '../../components/Shared/ETWSCard'
import Style from './Workshops.module.css'

const Workshops = () => {
  return (
    <div className="flex flex-wrap max-sm:justify-center max-xl:justify-around justify-between">
      <ETWSCard />
      <ETWSCard />
      <ETWSCard />
      <ETWSCard />
      <ETWSCard />
      
    </div>
  )
}

export default Workshops