import { useEffect, useState } from "react";

const Github = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jk872001")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h2>Github Followers:- {user?.followers}</h2>
      <img src={user?.avatar_url}/>
    </div>
  );
};

export default Github;

// export const gihubLoaderInfo=async()=>
// {
//     const result= await fetch("https://api.github.com/users/jk872001")
//       return result.json()
// }
