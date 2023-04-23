export interface ApiResult {
  titulo: string,
  descripcion: string,
  enlace: string,
  miniatura: string,
  pdfName?: string,
  data?: DataDuration[],
  audiosDuration: any
}

export interface DataDuration {
  end: number;
  init: number;
  page: number;
}