import { Component, OnInit } from '@angular/core';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  /*CKEditor properties */
  public editor = ClassicEditorBuild;
  public ckEditorConfigs: Object = {
    toolbar: [ 'bold', 'italic', 'link', 'bulletedList', 'numberedList' ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
