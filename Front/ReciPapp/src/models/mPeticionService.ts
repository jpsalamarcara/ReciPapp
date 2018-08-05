const IP_SERVICE: String ="http://52.87.158.30";

export class PeticionService{
    method: string;
    body?: any;

    constructor(_method: string, _body?: any){
        this.method = _method;
        this.body = _body;
    }

    public get endPoint(){
        return `${IP_SERVICE}${this.method}`;
    }
}

export class ResposeService{
    excecuted: boolean;
    message: string;
    response?: object;

    constructor(_excecuted: boolean = false, _response?: object, _message: string = 'Petición no ejecutada. '){
        this.excecuted = _excecuted;
        this.message = _message;
        this.response = _response;
    }
}
