import useState from "react";
import tokenService from "../services/token.service";

import getErrorModal from "../../util/getErrorModal";
import getIdFromUrl from "../../util/getIdFromUrl";
import useFetchState from "../../util/useFetchState";

const jwt=tokenService.getLocalAccessToken();

export default function AchievementEdit(){
    const emptyAchievement={
        id: 0,
        name: "",
        description: "",
        badgeImage: "",
        threshold: 1,
        metric: "GAMES_PLAYED",
        actualDescription: ""};
    const id = getIdFromUrl(2);
    const [message, setMessage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [achievement, setAchievement] = useFetchState(
        emptyAchievement, 
        `/api/v1/achievements/${id}`,
        jwt,
        setMessage,
        setVisible,
        id
    );
    
    const modal = getErrorModal(setVisible, visible, message);

    function handleSubmit(){
        
    }

    function onChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;        
        setAchievement({...achievement,[name]:value});        
    }


    return (
        <div className="auth-form-container">
        <Form onSubmit={handleSubmit}>
          <div className="custom-form-input">
            <Label for="name" className="custom-form-input-label">
              Name
            </Label>
            <Input
              type="text"
              required
              name="name"
              id="name"
              value={achievement.name || ""}
              onChange={handleChange}
              className="custom-input"
            />
          </div>
          <div className="custom-form-input">
            <Label for="description" className="custom-form-input-label">
              Description
            </Label>
            <Input
              type="text"
              required
              name="description"
              id="decsripction"
              value={achievement.description || ""}
              onChange={handleChange}
              className="custom-input"
            />
          </div>
          <div className="custom-form-input">
            <Label for="badgeImage" className="custom-form-input-label">
              Badge Image Url:
            </Label>
            <Input
              type="text"
              required
              name="badgeImage"
              id="badgeImage"
              value={achievement.badgeImage || ""}
              onChange={handleChange}
              className="custom-input"
            />
          </div>          
          <div className="custom-form-input">
            <Label for="status" className="custom-form-input-label">
              Metric
            </Label>
            <Input
              type="select"
              required
              name="metric"
              id="metric"
              value={consultation.metric || ""}
              onChange={handleChange}
              className="custom-input"
            >
              <option value="">None</option>
              <option value="GAMES_PLAYED">GAMES_PLAYED</option>
              <option value="VICTORIES">VICTORIES</option>
              <option value="TOTAL_PLAY_TIME">TOTAL_PLAY_TIME</option>
            </Input>
          </div>          
          <div className="custom-form-input">
            <Label for="theshold" className="custom-form-input-label">
              Threshold value:
            </Label>
            <Input
              type="text"
              required
              name="threshold"
              id="threshold"
              value={achievement.threshold || ""}
              onChange={handleChange}
              className="custom-input"
            />
          </div>
          <div className="consultation-checkbox-container">
            <label htmlFor="isClinicComment">
              ¿Is the consultation a comment for the clinic?
            </label>
            <div className="checkbox-wrapper-10">
              <Input
                type="checkbox"
                id="isClinicComment"
                className="tgl tgl-flip"
                onChange={handleChange}
                name="isClinicComment"
                checked={consultation.isClinicComment}
              />
              <label
                htmlFor="isClinicComment"
                data-tg-on="Yes"
                data-tg-off="No"
                className="tgl-btn"
              ></label>
            </div>
          </div>
          <div className="custom-button-row">
            <button className="auth-button">Save</button>
            <Link
              to={`/achievements`}
              className="auth-button"
              style={{ textDecoration: "none" }}
            >
              Cancel
            </Link>
          </div>
        </Form>
      </div>

    );
}  