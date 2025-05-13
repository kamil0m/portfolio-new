export default interface Education {
  id: string;
  start_date?: string;
  end_date?: string;
  title: string;
  provider: string;
  format?: string;
  speciality?: string;
  topics: string[] | string;
}
