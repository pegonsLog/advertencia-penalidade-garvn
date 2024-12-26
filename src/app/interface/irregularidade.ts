export interface IIrregularidades extends Array<IIrregularidade> {}
export interface IIrregularidade {
  id: string;
  numeroIrregularidade: string;
  dataIrregularidade: string;
  horario: string;
  local: string;
  numeroLocal: string;
  bairro: string;
  descricao: string;
  dataEmissao: string;
  prazoCumprimentoConferencia: string;
  matAgenteConferente: string;
  matriculaAgente: string;
  codigoInfracao: string;
  numeroLinha: string;
  numeroVeiculo: string;
}
