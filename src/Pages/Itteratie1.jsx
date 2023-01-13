import {useEffect, useState} from 'react';

function Itteratie1() {
    
    const [githubData, setGithubData] = useState([])
    const [githubUser, setGithubUser] = useState("therealnock")
    
    const fetchData = () => {
      return fetch(`https://api.github.com/users/${githubUser}`)
        .then((response) => response.json())
        .then((data) => setGithubData(data));
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
  console.log(githubData);
  
    return (
      <div>
        <div>
          <input type="text" placeholder="User" onChange={(e) => setGithubUser(e.target.value)}/>
          <button onClick={fetchData} className="search_button">Search Github</button>
        </div>
        <br/>
        <div>
            <img src={githubData.avatar_url} height="100" width="100" />
            <p>Name: {githubData.name}</p>
            <p>Followers: {githubData.followers}</p>
            <p>Following: {githubData.following}</p>
            <p>Repo's: {githubData.public_repos}</p>
          </div>
      </div>
    );
  }

export default Itteratie1
