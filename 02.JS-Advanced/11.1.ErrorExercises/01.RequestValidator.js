function validateRequest(obj) {

    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    if (!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    let uriPattern = /^[\w.]+$/;
    if (!(obj.uri && (uriPattern.test(obj.uri) || obj.uri == "*"))) {
        throw new Error("Invalid request header: Invalid URI");
    }
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (!validVersions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    let msgPattern = /^[^<>\\&'"]*$/;
    if (!(obj.hasOwnProperty("message") && (msgPattern.test(obj.message) || obj.message == ""))) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return obj;
}
validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});