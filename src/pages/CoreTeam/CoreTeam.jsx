// import TeamCard from '../../components/Shared/TeamCard';
import WebCard from '../../components/Shared/WebCard'

import { CoreTeamData } from "../../constants";
const CoreTeam = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   ">
      {CoreTeamData.map((t) => (
          <div key={t.id} className="flex justify-center my-5">
            <WebCard img={t.img} name={t.name} role={t.role} />
          </div>
        ))}
       </div>
    </div>
  )
}

export default CoreTeam
