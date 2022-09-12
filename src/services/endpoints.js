export const BASE_DOMAIN = 'https://keypumps.herokuapp.com';

export const endpoints = {
    allProducts: `${BASE_DOMAIN}/getPosts&postType=Product`,
    allCategories: `${BASE_DOMAIN}/getCategories`,
    allPromos: `${BASE_DOMAIN}/getPromos`,
    allArticles: `${BASE_DOMAIN}/getArticles`,
}

