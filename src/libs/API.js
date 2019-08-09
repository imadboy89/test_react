import Auth from "../libs/Auth";

class API{
    constructor(){
        this.error = null;
        this.data = null;
        this.Auth = new Auth();
    }
    parse_args(args) {
        var args_str = "&";
        for (var k in args) {
          if (typeof args[k] == "number" || typeof args[k] == "string") {
            args_str += k + "=" + args[k] + "&";
          }
        }
        return args_str;
      }
    API_get(model, data){
        let args_str = this.parse_args(data);
        
        return fetch('http://163.172.8.2:8031/'+model+"/?format=json"+args_str,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization":"JWT "+this.Auth.token,
            }
        })
        .then(res => {
            if(res.status==401){
                this.Auth.logOut();
                this.error = 'Please Sign in first !';
                return res ;
            }
            let data_res = res.json();
            console.log(res);
            if ("non_field_errors" in data_res) {
                this.error = data_res["non_field_errors"];
                this.isAuth = false;
            }
            else{
                return data_res;
            }
            
        })
        .catch(error => {
            console.log(error)
            this.error = error ;
        })

    }
}

export default API;