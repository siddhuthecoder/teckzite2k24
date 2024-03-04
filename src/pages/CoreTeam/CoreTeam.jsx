import TeamCard from '../../components/Shared/TeamCard';
import Style from './CoreTeam.module.css';

const CoreTeam = () => {
  return (
      <div>
        <div className="flex flex-wrap max-sm:justify-center max-xl:justify-around justify-between">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
  )
}

export default CoreTeam