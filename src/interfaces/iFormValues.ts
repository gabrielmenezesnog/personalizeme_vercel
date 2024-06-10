export interface iFormValues {
  personalData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
    gender: string;
    maritalStatus: string;
  };
  address: {
    cep: string;
    streetName: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  career: {
    office: string;
    experience: string;
    habilities: string;
    languages: string;
  };
  _id?: string;
}
