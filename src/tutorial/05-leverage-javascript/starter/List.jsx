import { people } from "../../../data"
import { PersonCard } from "./PersonCard"

export const List = () => {
  return (
    <div>
    {people.map((person) => {
      console.log(person);
        return(
        <div  key={person.id}>
            <h2>{person.name}</h2>
            <PersonCard {...person} />
        </div>
        )
    })}
    </div>
  )
}
 