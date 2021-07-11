import React,{useState} from "react";
import Context from "./Context"


const Provider=props=>{

    const [mission, setMission]=useState({
        mname:"go to Russia",
        agent:"007",
        accept:"not accepted"
    })

    return (
      <Context.Provider
        value={{
          data: mission,
          isMissionAccepted: () => {
            setMission({ ...mission, accept: "accepeted mission" });
          },
        }}
      >
        {props.children}
      </Context.Provider>
    );
}

export default Provider;

