import {
    Table
  } from "reactstrap";

  import tokenService from "../services/token.service";
  import useFetchState from "../util/useFetchState";
  import { useState } from "react";

  const imgnotfound = "https://cdn-icons-png.flaticon.com/512/5778/5778223.png";

 /* const achievements = [
    {name:"Experiencia básica", description:"Si juegas 10 partidas o más", image:"https://cdn-icons-png.flaticon.com/512/5243/5243423.png", threshold:"10", metric:"GAMES_PLAYED"},
    {name:"Explorador", description:"Si juegas 25 partidas o más", image:"https://cdn-icons-png.flaticon.com/512/603/603855.png", threshold:"25", metric:"GAMES_PLAYED"},
    {name:"Experto", description:"Si ganas 20 partidas o más", image:"https://cdn-icons-png.flaticon.com/512/4737/4737471.png", threshold:"20", metric:"VICTORIES"}
  ];*/

  const jwt = tokenService.getLocalAccessToken();

   export default function AchievementList() {
    const [message, setMessage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [achievements, ] = useFetchState(
      [],
      `/api/v1/achievements`,
      jwt,
      setMessage,
      setVisible
    );

    const achievementList =
    achievements.map((a) => {
        return (
            <tr key={a.id}>
                <td className="text-center">{a.name}</td>
                <td className="text-center"> {a.description} </td>
                <td className="text-center"> 
                  <img src={a.image ? a.image : imgnotfound } alt={a.name} width="50px"/>    
                </td>
                <td className="text-center"> {a.threshold} </td>
                <td className="text-center"> {a.metric} </td>
                <td className="text-center"> --- </td>
            </tr>
        );
    });

    return (
      <div>
      <div className="admin-page-container">
        <h1 className="text-center">Achievements</h1>
        <div>
          <Table aria-label="clinics" className="mt-4">
            <thead>
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Description</th>
                <th className="text-center">Image</th>
                <th className="text-center">Threshold</th>
                <th className="text-center">Metric</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>{achievementList}</tbody>
          </Table>
        </div>
      </div>
    </div>
    );
  }