import Auth from "./Auth";
import API from "./API";
class Songs extends API{
    constructor(props) {
        super();
        this.Songs_list = [];
        this.Auth = new Auth();
    }

    getSongs(data){
        return this.API_get("songs",{});
    }

}


export default Songs;