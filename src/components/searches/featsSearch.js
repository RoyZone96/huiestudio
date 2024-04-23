import { useEffect, useState, React } from "react";
import axios from "axios";

export default function FeatsSearch({ featToSearch }) {
  let [featResult, setFeatResult] = useState(null);
  let [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (featToSearch !== "") {
      let moddedFeatToSearch = featToSearch.replaceAll(" ", "-");
      let featUrl = `https://api.open5e.com/feats/${moddedFeatToSearch}`;

      axios
        .get(featUrl)
        .then((response) => {
          setFeatResult(response.data);
          console.log(response.data);
          console.log(featResult);
          console.log("get feat result");
          setErrorMessage("No errors, traveler");
        })
        .catch((err) => {
          console.log();
          console.log(err);
          alert("Error in getting the feat: ")
        });
    }
  }, [featToSearch]);

  return (
    <div className="scroll-container">
      {featResult && (
        <div>
          <h1 className="display-4"> {featResult.name}</h1>
          <h2>{featResult.desc}</h2>
          <h3>{featResult.effects_desc}</h3>
          <h2>{featResult.prerequisite}</h2>
        </div>
      )}
    </div>
  );
}
