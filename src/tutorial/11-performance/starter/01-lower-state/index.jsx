import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Counter from "./Counter.jsx";
const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
        <List people={people} />
        <Counter />
    </section>
  );
};
export default LowerState;
