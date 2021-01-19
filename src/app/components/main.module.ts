import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageComponent } from './message/message.component';
import { ChannelsComponent } from './channels/channels.component';
import { UsersComponent } from './users/users.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { HeaderComponent } from './header/header.component';
import { SendMessageComponent } from './send-message/send-message.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    MessageComponent,
    ChannelsComponent,
    UsersComponent,
    HeaderComponent,
    ChatHistoryComponent,
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainModule { }
