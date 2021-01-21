import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss']
})
export class ChatHistoryComponent implements OnInit {

  public allMessages: Message

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.setMessageProps().then(data => this.getAllMessage(data));
  }

  public getAllMessage(messageBody: Message): void {
    this.messageService.getMessageHistory(messageBody)
      .subscribe((data: Message) => {
        this.allMessages = data;
        console.log(this.allMessages)
      })
  }

}
