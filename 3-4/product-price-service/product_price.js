module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    //add the pattern functions and describe the logic inside the function
    function productPrice(msg, respond) {
        mockData.forEach(function(item) {
            if (item.product_id == msg.productId)
                respond(null, { result: item.product_price });
        });
        respond(null, { result: -1 });
    }
}
