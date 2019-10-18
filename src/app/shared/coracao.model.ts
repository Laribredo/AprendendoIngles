export class Coracao {
    constructor(
        public cheio:boolean,
        public urlCoracaoVazio:string = '/assets/coracao_vazio.png',
        public urlCoracaoCheio:string = '/assets/coracao_cheio.png'
    ) {}

    exibeCoracao():string{
        if(this.cheio)
        {
            return this.urlCoracaoCheio;
        }   
        else
        {
            return this.urlCoracaoVazio; 
        }
            
    }
}