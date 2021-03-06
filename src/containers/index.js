import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../components/List';
import AddItem from './AddItem';
import FilterableTable from './FilterableTable';
import Footer from '../components/Footer';
import style from '../index.css';
import {Grid, Col} from 'react-bootstrap';

/*var ITEMS=[
	{id:0,text:'dddd'},
	{id:1,text:'scdf'},
	{id:2,text:'sdfrt'},
]*/
const App=(filter)=>(
		<Grid>
			<Col xs={12} md={8}>
				<AddItem/>
				<p>Hey</p>
				<List/>
				<Footer urlFilter={filter}/>
			</Col>
		</Grid>		
				
);


/*class App extends Component{
	renderWhat(){
		if(this.props.params.filter==='a'){
			return <FilterableTable/>
		}
		else{
			return(
					<div className={style.Container}>
					<AddWeightItem/>
					<p>Hey</p>
					<WeightList urlFilter={this.props.params}/>
					</div>	
			
				);
		}
	}*/
	/*render(){
		return(
			<div className={style.Container}>
					<AddWeightItem/>
					<p>Hey</p>
					<WeightList/>
					<Footer urlFilter={this.props.params}/>
			</div>	
			);
			
	}*/
// }
// 

export default App;
// export default connect(mapStateToProps,mapDispatchToProps)(App);