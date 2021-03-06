import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private apiService: ApiService) { }

  getMessages(chat_name: string) {
    return this.apiService.getMessages(chat_name)
  }

}
