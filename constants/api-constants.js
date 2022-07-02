const apiConstants={
    RAPID_API:{
        key_name:"'X-RapidAPI-Key'",
        key_value:process.env.API_Key,
        host_name:"'X-RapidAPI-Key'",
        host_value:process.env.API_Host,
        method:'GET',
        url:'https://asos2.p.rapidapi.com/products/v2/list',
        store: 'US',
        offset: '0',
        categoryId: '4209' ,
        limit: '48',
        country: 'US',
        sort: 'freshness',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US'
    }
}
 module.exports={apiConstants}