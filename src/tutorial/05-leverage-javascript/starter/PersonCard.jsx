
import avatar from '../../../assets/default-avatar.svg'

//&& will short circuit to the left << 
//&& since there is only one nickname, 

export const PersonCard = ({name, nickName = 'shakeandbake', images}) => {
  const img = images?.[0]?.small?.url || avatar;
  
    return (
    <div>
    <img src={img} style={{width:'50px'}}/>    
    <h4>{name}</h4>
    <p>Nickname : {nickName}</p>

    </div>
  )
}


// make sure you log when mapping so that you can see the values. 
// know that when working with api request, the structure is not going to 
// be orderly. props will be nested 