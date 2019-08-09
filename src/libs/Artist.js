import Auth from "./Auth";
import API from "./API";
class Artist extends API{
    constructor(props) {
        super();
        this.artist_list = [];
        this.Auth = new Auth();
    }
    getArtists(data){
        return this.API_get("artists",{});
    }

}


export default Artist;