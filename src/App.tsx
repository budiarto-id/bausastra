import {NavigationView, Page, contentView} from 'tabris';
import {inject} from 'tabris-decorators';
import {MainViewModel} from './MainViewModel';
import {MainView} from './MainView';

export class App {

  constructor(
    @inject private main: MainViewModel
  ) {}

  public start() {
	new NavigationView({layoutData: 'stretch'})
	  .append(new Page({title: 'Bausastra Jawa'}))
	  .appendTo(contentView);
    contentView.append(
      <MainView stretch model={this.main}/>
    );
  }

}
