export interface IColaborador {
    id: string;
    nome: string;
    cargo: string;
    corCabecalho: string;
    imagem: string;
    favorite: boolean;
    time?: string;
}