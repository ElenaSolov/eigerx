export enum projectStatus {
  active = 'active',
  finished = 'finished'
}

export interface ITask {
  title: string;
  about: string;
  status: projectStatus.active;
}

export const initialStateTask = {
  title: '',
  about: '',
  status: projectStatus.active
};
