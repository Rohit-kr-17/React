import React, { Component } from "react";
//import MenuComponent from "./MenuComponents";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
	render() {
		const list = this.props.dish.comments.map((comments) => {
			return (
				<li key={comments.id}>
					<div>
						<p>{comments.comment}</p>
						<p>
							--{comments.author},
							{new Intl.DateTimeFormat("en-US", {
								year: "numeric",
								month: "short",
								day: "2-digit",
							}).format(new Date(Date.parse(comments.date)))}
						</p>
					</div>
				</li>
			);
		});
		return (
			<div className=" row">
				<div className=" col-12 col-md-5 m-1">
					<Card>
						<CardImg
							width="100%"
							object
							src={this.props.dish.image}
							alt={this.props.dish.name}
						/>
						<CardBody>
							<CardTitle>{this.props.dish.name}</CardTitle>
							<CardText>{this.props.dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
				<div className="  col-12 col-md-5 m-1">{list}</div>
			</div>
		);
	}
}
export default DishDetail;
