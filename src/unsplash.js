import axios from 'axios'

const client = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID 5o6ljyr4wm7HG-sl9Cg-D0STvoMcXaM7WB4wCN3mh9s`
  }
})

export default client