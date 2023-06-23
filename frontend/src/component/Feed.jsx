import React, { useState } from 'react';
import '../assets/styles/Feed.css';
import axios from 'axios';
import { toast } from "react-hot-toast";
import { server} from "../main";

const Feed = ({ onClose, id,Pid, name, hp, moves, weight, height, attack, defense }) => {
  const [feed, setFeed] = useState(hp);

  const handleFeedChange = (e) => {
    const inputValue = e.target.value;
    setFeed(inputValue >= 0 ? inputValue : 0);
  };

  const feedHandler = async (id, feed) => {
    try {
      const { data } = await axios.put(
        `${server}/api/v1/pokemon/${id}`,
        {
          hp: feed,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
    //   setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="popup-feed">
      <div className="popup-content-feed">
        <div className="pok-name">
          <h4>{name}</h4>
        </div>
        <div className="pokemon-details-feed">
          <form action="">
            <label htmlFor="id">Id</label>
            <input type="number" className="input-feed" id="id" value={Pid} disabled />
            <br />
            <label htmlFor="hp">Health</label>
            <input type="number" className="input-feed" id="hp" value={feed} onChange={handleFeedChange} />
            <br />
            <label htmlFor="moves">Moves</label>
            <input type="number" className="input-feed" id="moves" value={moves} disabled />
            <br />
            <label htmlFor="weight">Weight</label>
            <input type="number" className="input-feed" id="weight" value={weight} disabled />
            <br />
            <label htmlFor="height">Height</label>
            <input type="number" className="input-feed" id="height" value={height} disabled />
            <br />
            <label htmlFor="attack">Attack</label>
            <input type="number" className="input-feed" id="attack" value={attack} disabled />
            <br />
            <label htmlFor="defense">Defense</label>
            <input type="number" className="input-feed" id="defense" value={defense} disabled />
            <br />
            <button className="feed-btn" onClick={() => feedHandler(id, feed)}>Feed</button>
          </form>
        </div>
        <button className="feed-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Feed;
