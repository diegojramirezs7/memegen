import React, {Component} from 'react';

class Memegenerator extends Component{
	state = {
		topText: "",
		bottomText: "",
		randomImage: "https://i.imgflip.com/26am.jpg",
		allMemeImgs: []
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const randInt = Math.floor(Math.random() * this.state.allMemeImgs.length);
		const randImgUrl = this.state.allMemeImgs[randInt].url;
		this.setState({
			randomImage: randImgUrl
		});
	}

	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
		.then(response => response.json())
		.then(response => this.setState({
			allMemeImgs: response.data.memes
		}));
	}

	render(){
		return (
			<div className="memeContainer">
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text"
						name="topText"
						placeholder="Add Top Text"
						value={this.state.topText}
						onChange={this.handleChange}
					/>
					<input 
						type="text"
						name="bottomText"
						placeholder="Add Bottom Text"
						value={this.state.bottomText}
						onChange={this.handleChange}
					/>
					<button>Generate Meme </button>
				</form>
				<div className="meme">
					<img src={this.state.randomImage} alt=""/>
					<h2 className="topText">{this.state.topText}</h2>
					<h2>{this.state.bottomText}</h2>
				</div>
			</div>
		);
	}
}

export default Memegenerator;


