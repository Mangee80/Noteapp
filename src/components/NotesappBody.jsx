import React, { useState, useEffect } from 'react';
import styles from "./NotesappBody.module.css";
import img from "../assets/img.png";
import Vector from "../assets/Vector.svg";

const NotesappBody = (selectedObject) => {
  
  const [isSelectedHead, setIsSelectedHead] = useState(false);
  useEffect(() => {
    
    if (selectedObject) {
      setIsSelectedHead(true);
    } else {
      setIsSelectedHead(false);
    }
  }, [selectedObject]);
  return (
    <>
      {isSelectedHead ? <Body_Clicked  /> : <Body />}        
    </>
    
  )
};



const Body_Clicked = () => {
    
  return (
    <>
      <div className={styles.body_clicked}>
        <div className={styles.heading}>
          Hi
        </div>
        
        <div className={styles.content}>
          
        </div>
        <div className={styles.inputBox}>
          
        </div>
        <div className={styles.footer}>
          
        </div>
      </div>
    </>
  )
}

const Body = () => {
    return (
      <>
        <div className={styles.body}>
            <div style={{height: "310px", width: "620"}}>
                <img style={{height: "100%", width: "100%"}} src={img} />
            </div>
            <p className={styles.subhead}>Pocket Notes</p>
            <p style={{fontSize:"22px", letterSpacing: "0.02em", color: "#292929"}}>Send and receive messages without keeping your phone online.</p>
            <p style={{fontSize:"22px", letterSpacing: "0.02em", color: "#292929"}}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <div className={styles.footer}>
                <div style={{height: "21px", width: "16.9"}}><img style={{height: "100%", width: "100%"}} src={Vector} /></div>
                <p>end-to-end encrypted</p>
            </div>
        </div>
      </>
    )
};
export default NotesappBody;