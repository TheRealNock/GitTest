import { useState, useEffect } from "react"
import './../style/card.css'

function Itteratie2() {

    const [githubData, setGithubData] = useState([])
    const [githubUser, setGithubUser] = useState("therealnock")
  
    const fetchData = () => {
        return fetch(`https://api.github.com/users/${githubUser}/repos`)
          .then((response) => response.json())
          .then((data) => setGithubData(data));
      }
    
      useEffect(() => {
        fetchData()
      }, [])
    
    console.log(githubData);

return(
    <>
    <div>
          <input type="text" placeholder="User" onChange={(e) => setGithubUser(e.target.value)}/>
          <button onClick={fetchData} className="search_button">Search Github</button>
        </div>
        <br/>
        <div>
        {githubData.slice(0,1).map((item) => (
        <img src={item.owner.avatar_url} height="100" width="100" />
        ))}
        </div>
        <div className='card-container'>
          {githubData.map((item) => (
             <tr key={item.id}>
             <div className='card' style={{ width: '18rem', height: '240px', margin: '10px' , borderStyle: 'solid'}}>
               <div className="card-body">
                 <h5 className="card-title">{item.name}</h5>
                 <p className="card-text">{item.description}</p>
                 <p className="card-text">{item.language}</p>
               </div>
             </div>
           </tr>
          ))}
        </div>
      
    </>
)

}

export default Itteratie2;