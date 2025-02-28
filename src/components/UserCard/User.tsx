import { UserContainer } from "./style";
import { useState, useEffect } from "react";

export function User() {
  interface GitHubUser {
    name: string;
    avatar_url: string;
  }

  const [UserData, setUserData] = useState<GitHubUser | null>(null);

  async function getUser(username: String): Promise<GitHubUser> {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    async function fetchUser() {
      const data = await getUser("maatbm");
      setUserData(data);
    }
    fetchUser();
  }, []);

  return (
    <UserContainer>
      {UserData ? (
        <>
          <div>
            <img src={UserData.avatar_url} alt="avatar" />
            <h1>{UserData.name}</h1>
          </div>
        </>
      ) : (
        <p>Aguarde um pouco</p>
      )}
    </UserContainer>
  );
}
