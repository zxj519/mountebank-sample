function(request, response) {
    var pad = function(number) {
            return (number < 10) ? '0' + number : number.toString(); },
        now = new Date(),
        time = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    response.body = response.body.replace('${TIME}', time); }
