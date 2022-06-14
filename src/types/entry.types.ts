import { Comment } from './comment.types';
import { Media } from './media.types';
import { User } from './user.types';

export interface SurveyAnswer {
  id: number;
  text: string;
  voteCount: number;
  votePercentage: number;
}

export interface Survey {
  question: string;
  answers: SurveyAnswer[];
  userAnswer?: number;
}

export interface Entry {
  id: number;
  user: User;
  body: string;
  date: string;
  voteCountPlus: number;
  commentsCount: number;
  survey?: Survey;
  media?: Media;
  comments?: Comment[];
}
