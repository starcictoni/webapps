import axios from 'axios';

let Service = {
    async getGlobal(numb) {
        let response = await axios.get(`https://api.github.com/repos/vuejs/vue/commits?per_page=${numb}`)
        return response.status === 200 ? response.data : 'No available data';
        
    },
    async getDetails(sha) {
        let response = await axios.get(`https://api.github.com/repos/vuejs/vue/commits/${sha}`)
        return response.status === 200 ? response.data : 'No available data';
    }
}

export default Service;