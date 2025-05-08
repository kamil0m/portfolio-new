interface Education {
  id: string;
  start_date?: string;
  end_date?: string;
  title: string;
  provider: string;
  format?: string;
  topics: string[] | string;
}
