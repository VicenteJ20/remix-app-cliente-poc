import React, { useEffect, useState } from 'react';

const knownIds = [
  'id1', 'id2', 'id3', 'id4', 'id5', 
  'id6', 'id7', 'id8', 'id9', 'id10'
];

const ReadFromServer: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [idStatus, setIdStatus] = useState<{ [key: string]: boolean }>(
    knownIds.reduce((acc, id) => ({ ...acc, [id]: false }), {})
  );

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3000/server-events/sse');
    eventSource.onmessage = ({ data }) => {
      const parsedData = JSON.parse(data);
      console.log('New message', parsedData);
      setMessages((prevMessages) => [...prevMessages, parsedData]);

      if (knownIds.includes(parsedData.id)) {
        setIdStatus((prevStatus) => ({
          ...prevStatus,
          [parsedData.id]: true
        }));
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className='grid grid-cols-12 gap-4'>
      {knownIds.map((id) => (
        <div
          key={id}
          style={{
            backgroundColor: idStatus[id] ? 'green' : 'red',
            padding: '10px',
            margin: '5px',
            color: 'white'
          }}
        >
          {id}
        </div>
      ))}
    </div>
  );
};

export default ReadFromServer;