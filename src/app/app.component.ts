import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'normativi';

  dogadjaj: string='';
  notifyWhenClickLighter(lighterObject:any){
    this.dogadjaj=`Pritisnut je lighter ${lighterObject.source} status je ${lighterObject.state}`;
  }
}
