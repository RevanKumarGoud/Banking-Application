import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
@Input() conversation:any;
@Output() onSubmit: EventEmitter<any> = new EventEmitter();
emojiPickerVisible: any;

message = '';
submitMessage(event:any) {
  let value = event.target.value.trim();
  this.message = '';
  if(value.length < 1)  return  false;
    this.conversation.latestMessage = value;
    this.conversation.messages.unshift({
     id: 1,
     body: value,
     time: new Date().toLocaleTimeString(),
     me: true,
   });
  
   console.log(value)
}

emojiClicked(event:any) {
  this.message += event.emoji.native;
}
}

