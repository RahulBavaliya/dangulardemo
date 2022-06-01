import { Injectable } from '@angular/core'; 
@Injectable()
export class Constants {
  public static readonly URL: string ='https://jsonplaceholder.typicode.com/users';
    // 'http://jsonplaceholder.typicode.com/todos/';
  public static readonly API_ENDPOINT: string = 'https://www.userdomain.com/';
  public readonly API_MOCK_ENDPOINT: string = 'https://www.userdomainmock.com/';
  public static readonly TitleOfSite: string =
    'custome title Making API calls the Right Way by Monica custome title';
} 