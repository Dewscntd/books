export interface AppState {
  bookItems?: Book[];
  wishlist?: Book[];
  fetchingBooks?: boolean;
}


export interface VolumeInfo {
  allowAnonLogging?: boolean;
  authors?: [];
  canonicalVolumeLink?: string;
  categories?: [];
  contentVersion?: string;
  description?: string;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  infoLink?: string;
  language?: string;
  maturityRating?: string;
  panelizationSummary?: {};
  containsEpubBubbles?: boolean;
  containsImageBubbles?: boolean;
  previewLink?: string;
  printType?: string;
  publishedDate?: string;
  readingModes?: {};
  image?: boolean;
  text?: boolean;
  title?: string;
}

export interface Book {
  accessInfo: {};
  etag: string;
  id: string;
  kind: string;
  saleInfo: {};
  searchInfo: {};
  selfLink: string;
  volumeInfo: VolumeInfo;
}

export interface BookSearch {
  items: Book[];
  kind: string;
  totalItems: number;
}
