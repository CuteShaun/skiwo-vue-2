import ky from "ky";

const getUsers = async (url) => {
    try {
        const response = await ky.get(url).json();
        return response;
    } catch (err) {
        console.log(err.message);
    }
};

export default getUsers;
