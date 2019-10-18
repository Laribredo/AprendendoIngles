import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import {Frase} from '../shared/frase.model'
import {FRASE_MOCK} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit,OnDestroy {

  public instrucao: string = "Traduza a Frase:";
  public frases: Frase[] = FRASE_MOCK;
  resposta:string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  public tentativas: number = 3;

  @Output() public encerrarJogo:EventEmitter<string> = new EventEmitter()

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
   }

  ngOnInit() {
    this.atualizaRodada();
  }

  ngOnDestroy(){
  }

  atualizaResposta(resposta:Event):void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  verificarResposta():void{
    if(this.rodadaFrase.frasePtBr == this.resposta)
    {
      this.rodada++
      this.progresso += (100/this.frases.length)
      this.atualizaRodada();

      if(this.rodada === 4)
      {
        this.encerrarJogo.emit('vitoria')
      }

    }else
    {
      this.tentativas--

      if(this.tentativas === -1)
      {
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  atualizaRodada():void{
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";
  }

}
