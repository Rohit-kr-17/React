import React, { Component } from "react";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
	render() {
		if (this.props.dish.length > 0) {
			const list = this.props.dish[0].comments.map((comments) => {
				return (
					<div key={comments.id}>
						<li>
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
					</div>
				);
			});
			// console.log(this.props.dish.length);
			return (
				<div className=" container">
					<div className="col-12 col-md-5 m-1">
						<Card>
							<CardImg
								width="100%"
								object
								src={this.props.dish[0].image}
								alt={this.props.dish[0].name}
							/>
							<CardBody>
								<CardTitle>{this.props.dish[0].name}</CardTitle>
								<CardText>{this.props.dish[0].description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="container">
						<div className="row">{list}</div>
					</div>
				</div>
			);
		}
	}
}
export default DishDetail;
