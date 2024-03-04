import Style from './WebTeam.module.css'
import TeamCard from '../../components/Shared/TeamCard'

const WebTeam = () => {
  return (
    <div>
      <div className="flex justify-center">
        <TeamCard />
      </div>
      <div className="flex flex-wrap max-sm:justify-center justify-between">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  )
}

export default WebTeam

//grid grid-cols-4 gap-x-20 max-sm:grid-cols-1 m-6 max-lg:grid-cols-2 max-lg:gap-6