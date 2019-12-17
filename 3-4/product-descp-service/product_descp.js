module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    //add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
        mockData.forEach(function(item) {
            if (item.product_id == msg.productId)
                respond(null, { result: item.product_url });
        });
        respond(null, { result: '' });
    }
    
    function productName(msg, respond) {
        mockData.forEach(function(item) {
            if (item.product_id == msg.productId)
                respond(null, { result: item.product_name });
        });
        respond(null, { result: '' });
    }
}
