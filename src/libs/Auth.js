

class Auth{
    constructor() {
        this.token  = localStorage.getItem("Token");
        this.isAuth = this.token?true:false;
        this.user   = JSON.parse(localStorage.getItem("User"));
        this.error  = null;

        console.log(this.token?true:false,this.isAuth);

    }
    logOut(){
        console.log(Auth);
        localStorage.removeItem("Token");
        localStorage.removeItem("User" );
        this.user = null;
        this.isAuth = false;
        this.token = null;
    }
    setAuth(data){
        this.isAuth = true;
        this.token  = data["token"];
        this.user   = data["user"];
        this.error  = ("error" in data) ? data["error"] : null;

        localStorage.setItem("Token",data["token"]);
        localStorage.setItem("User",JSON.stringify(data["user"]) );
    }
    login(data){
        return fetch('http://163.172.8.2:8031/token/', {
            method: "POST",
            body: data,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(res => {
            if ("non_field_errors" in res) {
                console.log("herere");
                this.error = res["non_field_errors"];
                this.isAuth = false;
            }
            else if ("token" in res) {
                this.setAuth(res);
            }
        })
        .catch(error => {
            console.log(error)
            this.error = error ;
            this.isAuth = false;
        })
        /*
        const response = await fetch('http://163.172.8.2:8031/token/', {
            method: "POST",
            body: data,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        let DATA;
        console.log(response)
        let status = DATA.status;
        data = DATA.data;
        this.error = null;
        this.isAuth = false;
        console.log(data)
        if (status == 404) {
            this.error = "Technical Issue, please try agian [" + status + "].";
            this.isAuth = false;
            return;
        }
        if ("non_field_errors" in data) {
            console.log("herere");
            this.error = data["non_field_errors"];
            this.isAuth = false;
        }
        else if ("token" in data) {
            this.setAuth(data);
            this.props.history.push("/");
        }
        else {
            this.error = "Technical Issue, please try agian [" + status + "].";
            this.isAuth = false;
        }
        */
    }
    
}

export default Auth;