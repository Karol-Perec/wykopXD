export type MediaType = 'youtube' | 'twitter' | 'streamable' | 'gfycat';
export type MimeType = 'image/jpeg' | 'image/gif'

export interface SurveyAnswer {
  count: number;
  id: number;
  text: string;
  voted: number;
}

export interface Media {
  embed: {
    key: string;
    thumbnail: string | null;
    type: MediaType;
    url: string;
  };
  photo: {
    height: number;
    key: string;
    label: string;
    mime_type: MimeType;
    size: number;
    url: string;
    width: number;
  } | null;
  survey: {
    actions: {
      create: boolean;
      delete: boolean;
      update: boolean;
      vote: boolean;
    };
    answers: SurveyAnswer[];
    count: number;
    deletable: false;
    editable: false;
    key: string;
    question: string;
    voted: number;
  } | null;
}
