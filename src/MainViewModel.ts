import {injectable, property} from 'tabris-decorators';

@injectable
export class MainViewModel {

  @property public message: string = '';
  @property public query: string = '';

  public continue() {
    this.message = 'Tabris.js rocks!';
  }
  
  public search(){
	//this.message = "q"+this.query;
	fetch(`https://budiarto.id/bausastra/words/search/${this.query}`)
	.then((res)=>{
		return res.json();
	})
	.then((data)=>{
		this.message = JSON.stringify(data);
	})
	.catch((err)=>{
		this.message = err;
	});
  }

}
