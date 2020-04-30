import {Composite, TextView, Button, Constraint, Properties, TextInput} from 'tabris';
import {component, bindAll} from 'tabris-decorators';
import {MainViewModel} from './MainViewModel';

@component // Enabled data binding syntax
export class MainView extends Composite {

  @bindAll({
    message: '#label.text',
	query: '#query.text'
  })
  public model: MainViewModel;

  constructor(properties: Properties<MainView>) {
    super();
    this.set(properties).append(
      <$>
		<Composite background={"#ff0000"} left={0} right={0} top={50} padding={40}>
		<TextInput id="query" left={0} right={0} font={{size: 16}} style='outline' onAccept={()=>this.model.search()} background={"#fff"}/>
		</Composite>
        <TextView id='label' centerX padding={16} bottom={Constraint.next} font={{size: 24}}/>
        <Button center onSelect={() => this.model.continue()}>Tap here</Button>
      </$>
    );
  }

}
