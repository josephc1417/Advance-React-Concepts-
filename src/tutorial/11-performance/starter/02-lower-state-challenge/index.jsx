import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Form from "./Form.jsx";


const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };

  return (
    <section>
      <List people={people} />
      <Form addPerson={addPerson} />
    </section>
  );
};
export default LowerStateChallenge;
