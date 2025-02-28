import {UserContainer} from './style';
import { useState, useEffect } from 'react';

export function User() {
    interface GitHubUser{
        name: string;
        avatar_url: string;
        bio: string;
    }

    async function getUser(username: String): Promise<GitHubUser> {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data;
    }

    const [UserData, setUserData] = useState<GitHubUser | null>(null);

    useEffect(() => {
        async function fetchUser() {
            const data = await getUser('torvalds');
            setUserData(data);
            console.log(data); // Não esquecer de tirar no final
        }
        fetchUser();
    }, []);

    return (
        <UserContainer>
            <div>
                {UserData ? (
                    <>
                        <h1>{UserData.name}</h1>
                        <img src={UserData.avatar_url} alt="avatar" />
                        <p>{UserData.bio}</p>
                    </>
                ) : (
                    <p>Aguarde um pouco</p>
                )}
            </div>
        </UserContainer>
    );
}