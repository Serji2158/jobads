export type contactType = {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export type jobcardType = {
  id: string,
  title: string;
  salary: string;
  description: string;
  createdAt: string;
  location: locationType;
  benefits: string[];
  employment_type: string[];
  pictures: string[];
  // contacts: contactType;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export type locationType = {
  lat: string;
  long: string;
}