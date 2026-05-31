export interface Era {
  id: number;
  name: string;
  sortOrder: number;
}

export interface Style {
  id: number;
  name: string;
}

export interface Architect {
  id: number;
  name: string;
}

export interface Purpose {
  id: number;
  name: string;
}

export interface LegalStatus {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Landmark {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  yearOfConstruction: string;
  address: string;
  imageUrl: string;
  eraId: number;
  era: Era;
  styleId: number;
  style: Style;
  architectId: number | null;
  architect?: Architect | null;
  purposeId: number;
  purpose: Purpose;
  legalStatusId: number;
  legalStatus: LegalStatus;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface LandmarksQueryParams {
  eraId?: number;
  categoryId?: number;
  search?: string;
  page?: number;
  limit?: number;
}
