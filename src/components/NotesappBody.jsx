import React, { useState, useEffect } from 'react';
import styles from "./NotesappBody.module.css";
import img from "../assets/img.png";
import Vector from "../assets/Vector.svg";

const NotesappBody = ({ selectedObject }) => {
  const [isSelectedHead, setIsSelectedHead] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setIsSelectedHead(selectedObject !== null);
    // Load tasks from local storage on component mount
    if (selectedObject) {
      const storedTasks = JSON.parse(localStorage.getItem(selectedObject.groupName)) || [];
      setTasks(storedTasks);
    }
  }, [selectedObject]);

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  
  const handleSaveTask = () => {
    if (taskDescription) {
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newTask = {
        description: taskDescription,
        date: currentDate,
        time: currentTime,
      };

      // Update the state and local storage
      setTasks([...tasks, newTask]);
      localStorage.setItem(selectedObject.groupName, JSON.stringify([...tasks, newTask]));
      setTaskDescription('');
    }
  };

  return (
    <>
      {isSelectedHead ? (
        <div className={styles.body_clicked}>
          <div className={styles.heading}>
            <div className={styles.logo}>{selectedObject.initials}</div>
            <p className={styles.noteheading}>{selectedObject.groupName}</p>
          </div>

          <div className={styles.content}>
            {tasks.map((task, index) => (
              <div key={index} className={styles.taskItem}>
                <div className={styles.dateTimeColumn}>
                  <p>{task.time}</p>
                  <p>{task.date}</p>
                </div>
                <div className={styles.taskColumn}>
                  <p>{task.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.inputBox}>
            <div>
              <textarea
                className={styles.inputTextArea}
                value={taskDescription}
                onChange={handleTaskDescriptionChange}
                placeholder="Enter your task description"
                rows="4"
              ></textarea>
              <button onClick={handleSaveTask}>Save Task</button>
            </div>
          </div>

          <div className={styles.footer}></div>
        </div>
      ) : (
        <div className={styles.body}>
            <div style={{height: "310px", width: "620"}}>
                <img style={{height: "100%", width: "100%"}} src={img} />
            </div>
            <p className={styles.subhead}>Pocket Notes</p>
            <p style={{fontSize:"22px", letterSpacing: "0.02em", color: "#292929"}}>Send and receive messages without keeping your phone online.</p>
            <p style={{fontSize:"22px", letterSpacing: "0.02em", color: "#292929"}}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <div className={styles.footerbody}>
                <div style={{height: "21px", width: "16.9"}}><img style={{height: "100%", width: "100%"}} src={Vector} /></div>
                <p>end-to-end encrypted</p>
            </div>
        </div>
      )}
    </>
  );
};

export default NotesappBody;





























// import React, { useState, useEffect } from 'react';
// import styles from "./NotesappBody.module.css";
// import img from "../assets/img.png";
// import Vector from "../assets/Vector.svg";

// const NotesappBody = ({ selectedObject }) => {
//   const [isSelectedHead, setIsSelectedHead] = useState(false);

//   useEffect(() => {
//     setIsSelectedHead(selectedObject !== null);
//   }, [selectedObject]);

//   return (
//     <>
//       {isSelectedHead ? <Body_Clicked selectedObject={selectedObject} /> : <Body />}
//     </>
//   );
// };


// const [taskDescription, setTaskDescription] = useState(''); // State for the task description
// const [updatedSelectedObject, setUpdatedSelectedObject] = useState(selectedObject);
// const handleTaskDescriptionChange = (e) => {
//   setTaskDescription(e.target.value);
// };

// const handleSaveTask = () => {
//   if (taskDescription) {
//     // Add the task description and current date and time to the selectedObject
//     const currentDate = new Date().toLocaleDateString();
//     const currentTime = new Date().toLocaleTimeString();
//     const updatedTask = `${taskDescription} (Created at ${currentDate}, ${currentTime})`;

//     const updatedObject = {
//       ...updatedSelectedObject,
//       [currentDate]: updatedTask, // Use the date as a key
//     };

//     // Update the state and local storage
//     setUpdatedSelectedObject(updatedObject);
//     localStorage.setItem(updatedObject.groupName, JSON.stringify(updatedObject));
//     setTaskDescription('');
//   }
// };
// const Body_Clicked = ({ selectedObject }) => {
  
//   const { groupName, initials } =  selectedObject;


//   return (
//     <>
//       <div className={styles.body_clicked}>
//         <div className={styles.heading}>
//           <div className={styles.logo}>{initials}</div>
//           <p className={styles.noteheading}>{groupName}</p>
//         </div>

//         <div className={styles.content}>
//         <div>
//           {data.map((item, index) => (
//             <div key={index} className="article-item">
//               <div className="date-time-column">
//                 <p>{item.date}</p>
//                 <p>{item.time}</p>
//               </div>
//               <div className="article-column">
//                 <p>{item.article}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         </div>
//         <div className={styles.inputBox}>
//         {updatedSelectedObject ? (
//         <>
//           <div className={styles.heading}>Hi</div>

//           <div className={styles.content}>
//             <textarea
//               value={taskDescription}
//               onChange={handleTaskDescriptionChange}
//               placeholder="Enter your task description"
//               rows="4"
//             ></textarea>
//             <button onClick={handleSaveTask}>Save Task</button>
//           </div>
//         </>
//       ) : (
//         <p>.</p>
//       )}
//         </div>
//         <div className={styles.footer}>
          
//         </div>
//       </div>
//     </>
//   )
// }

// const Body = () => {
//     return (
//       <>
//         <div className={styles.body}>
//             
//         </div>
//       </>
//     )
// };
// export default NotesappBody;