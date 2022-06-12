import { Comment } from './comment.types';
import { Media } from './media.types';
import { User } from './user.types';
import { WykopSurveyAnswer } from './wykopEntry.types';

export interface Survey {
  question: string;
  answers: WykopSurveyAnswer[];
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
