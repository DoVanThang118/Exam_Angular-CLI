export interface IData {
  categories: ICategory[];
  mails: IMail[];
}

export interface ICategory {
  name: string;
  avatar:string;
}

export interface IMail {
  name: string;
  avatar: string;
  title: string;
  hiredate: string;
  address: string;
  city: string;
  phone: string;
}

export interface IExam {
  status: number;
  message: string;
  data: IData;
}
