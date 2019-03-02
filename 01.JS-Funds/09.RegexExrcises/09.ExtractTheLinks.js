function extractTheLinks(input) {
    let arr = input.join(' ');
    let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;
    arr = arr.match(regex);
    console.log(arr === null ? "" : arr.join('\n'));
}
extractTheLinks(['Join WebStars now for free, at wwww.web-stars.com', 
'You can also support our partners:', 
'Internet - wwww.internet.com', 
'WebSpiders - wwww.webspiders101.com', 
'Sentinel - wwww.sentinel.-ko']);