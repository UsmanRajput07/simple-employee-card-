import { useEffect, useState } from "react";
import Navabar from "./Components/Navabar";
function App() {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://randomuser.me/api`);
      const data = await response.json();
      console.log(data.results);
      setUserdata(data.results);
    };
    fetchUser();
  }, []);
  return (
    <>
      <Navabar />
      {userdata.length !== 0 &&
        userdata.map((cv, idx) => {
          return (
            <div className="detail_card" key={idx}>
              <div className="card">
                <div className="card_img">
                  <img src={cv.picture.large} alt="logo" />
                </div>
              </div>
              <div className="person_Detail">
                <span className="first_name">{cv.name.first}</span>
                <span className="last_name">{cv.name.last}</span>
                <h4>{cv.gender}</h4>
                <h4>{cv.phone}</h4>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default App;
