import React from "react";
import ImageCard from "../../../../card";


export default function CardList() {
    return (
        <div style={containerStyle}>
         <ImageCard
          image="https://tse4.mm.bing.net/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          title="Mountain View"
          description="A beautiful mountain landscape"
        />

        <ImageCard
          image="https://tse4.mm.bing.net/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          title="Mountain View"
          description="A beautiful mountain landscape"
        />

        <ImageCard
          image="https://tse4.mm.bing.net/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          title="Mountain View"
          description="A beautiful mountain landscape"
        />

         <ImageCard
          image="https://tse4.mm.bing.net/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          title="Mountain View"
          description="A beautiful mountain landscape"
        />

        


        
        </div>
    );
}

const containerStyle = {
    display: "flex",
    gap: "10px",
    justifyContent:"center",
    flexwrap:"wrap",
    padding:"40px",
};