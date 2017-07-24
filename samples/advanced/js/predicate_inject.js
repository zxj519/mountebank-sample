function(request, logger) {
    var origBuffer = Buffer(request.query.id, 'base64');
    var decodedId = origBuffer.toString();
    return '123' === decodedId }
