import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGE1MzA0ODMzMjBkNmQxZTY2MjVjMTI2ZWE5MDFkYSIsInN1YiI6IjY0MmM3N2I1OGRlMGFlMDA5NzhlZTI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1fLv5Wv1jXqfMvRoNjF8Rm16RaISFHlhL7TSqC9EUvg";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};