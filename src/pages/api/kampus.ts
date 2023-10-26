import axios from 'axios';

const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3000/api/kampus');
    const users = response.data;
    return users;
};