import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmVmZjlkMDk3ZWY5OWI4MzY3ZTJkMDY1NzVmMjZiOCIsInN1YiI6IjY1MzlhYjNkMjRmMmNlMDEzOTBmOWU1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MgqO6vuao29-Y8qbjGSQ68L0X7WzB_O9jSrh0BC_P1g',
  },
});

export default instance;
