import { Estabelecimento } from "./Estabelecimento"

export class Profissional{
    public id_profissional: number
    public nome: string
    public endereco: string
    public celular: string
    public residencial: string
    public funcao: string
    public estabelecimento: Estabelecimento[]
}