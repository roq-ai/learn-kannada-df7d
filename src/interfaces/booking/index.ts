import { UserInterface } from 'interfaces/user';
import { LessonInterface } from 'interfaces/lesson';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  student_id?: string;
  lesson_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  lesson?: LessonInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  lesson_id?: string;
}
