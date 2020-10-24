export interface FinderSearchableSchema {
  /**
   * The Absolute path of the searchable term in the schema
   */
  path: string;

  /**
   * The title shown to the user
   */
  title: string;

  /**
   * The Input that will be utilized
   */
  input: React.ReactNode;
}

export interface FinderSchema {
  /**
   * The Type of Data to be located within the finder
   */
  type: string;

  /**
   * The Searchable Elements within the schema
   */
  search: FinderSearchableSchema[];

  /**
   * The Link of the API to call to fetch the returned results
   */
  api: string;
}
