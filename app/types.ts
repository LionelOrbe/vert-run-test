export default interface UserActivityDetail {
    name: string;
    date: string;
    distance: number;
    time: number; 
    elevationGain: number; 
    dataManagement: any;
}

export interface UserState {
    activities: any[]
    activityDetail: UserActivityDetail
  }