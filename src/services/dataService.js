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
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                }
            })

            return await res.json()
        } catch(err) {
            console.log(err);
        }
    }

    
    getCategories = async () => {
        try {
            let res = await fetch(endpoints.allCategories, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                }
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getPromos = async () => {
        try {
            let res = await fetch(endpoints.allPromos, {
                method: 'GET',
                mode: 'cors',
                headers,
            })

            return await res.json()
        } catch(err) {
            console.log(err);
        }
    }

    getArticles = async () => {
        try {
            let res = await fetch(endpoints.allArticles, {
                method: 'GET',
                mode: 'cors',
                headers,
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getProductFilter = async (category, filters) => {
        console.log(endpoints.filterProducts + `categoryTitle=${category}&filters=${filters.join()}`);
        try {   
            let res = await fetch(endpoints.filterProducts + `?categoryTitle=${category}&filters=${filters?.join()}`, {
                method: 'GET',
                mode: 'cors',
                headers,
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getDetailProduct = async (name) => {
        try {
            let res = await fetch(endpoints.detailProduct + `&postTitle=${name}`, {
                method: 'GET',
                mode: 'cors',
                headers,
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    getDetailCategory = async (name) => {
        try {
            let res = await fetch(endpoints.detailCategory + `&postTitle=${name}`, {
                method: 'GET',
                mode: 'cors',
                headers,
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    
}