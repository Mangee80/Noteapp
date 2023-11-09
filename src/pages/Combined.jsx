import React, { useState } from 'react';
import NotesappNav from '../components/NotesappNav';
import NotesappBody from '../components/NotesappBody';

function CombinedComponent() {
  const [selectedObject, setSelectedObject] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <NotesappNav setSelectedObject={setSelectedObject} />
      <NotesappBody selectedObject={selectedObject} />
    </div>
  );
}

export default CombinedComponent;
