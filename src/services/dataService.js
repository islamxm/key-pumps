import { endpoints } from "./endpoints"

const headers= {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${token}`
}

export default class dataService {
    getProducts = async () => {
        try {
            let res = await fetch(endpoints.allProducts, {
                method: 'GET',
                mode: 'cors',
                headers,
            })

            await res.json()
        } catch(err) {
            console.log(err);
        }
    }

    
}