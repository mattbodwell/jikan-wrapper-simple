class JikanRequest{

    constructor(){
        this.url = 'https://api.jikan.moe';
        this.apiVersion = 'v4';
    }

    send(urlEndPoint,callback){
        var finalUrl = this.urlBuilder(urlEndPoint);
        
        const request = new XMLHttpRequest();

        request.open('GET',finalUrl,true);

        request.onload = function (){
            callback(JSON.parse(request.response));
        }

        request.send();

    }

    urlBuilder(urlEndPoint){
        return `${this.url}/${this.apiVersion}/${urlEndPoint}`
    }

}

class Jikan{

    constructor(){
        this.JReq = new JikanRequest();
    }

    getMangaById(id,callback){
        var endPoint = `manga/${id}`;
        this.JReq.send(endPoint,callback);
    }

    getMangaResommendations(id,callback){
        var endPoint = `manga/${id}/recommendations`;
        this.JReq.send(endPoint,callback);
    }

    searchManga(query,callback){
        var endPoint = `manga?q=${query}`;
        this.JReq.send(endPoint,callback);
    }
}



