export interface IAPIUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IAPISupport {
    url: string;
    text: string;
}

export interface IAPIResponse {
    data: IAPIUser;
    support: IAPISupport;
}

const fetchUser = async (userId: number): Promise<any> => {
    const response = await fetch(`https://reqres.in/api/users/${Number(userId) || 1}`);
    const serializedResponse = await response.json() as IAPIResponse;
    return serializedResponse.data;
};

export {
    fetchUser
}