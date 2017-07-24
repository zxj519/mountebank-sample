function(request, state, logger) {
    var requestMessage = request.query.message;
    var responseStr = 'Hello! ' + requestMessage;
    return { statusCode: 200, headers: { 'Content-Type': 'application/xml' }, body: responseStr }; }
