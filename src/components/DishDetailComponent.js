import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
	return (
		<div className="col-12 col-md-5 m-1">
			<Card>
				<CardImg width="100%" object src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}
function RenderCommets(comments) {
	//console.log(comments);
	if (comments != null) {
		let list = comments.dish.map((comments) => {
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
			<div className="col-12 col-md-5 m-1">
				<h4>Comments</h4>
				<ul className="list-unstyled">{list}</ul>
			</div>
		);
	} else {
		<div></div>;
	}
}
const DishDetail = (props) => {
	//console.log(props);
	if (props.dish.length != 0) {
		return (
			<div className=" container">
				<div className="row">
					<RenderDish dish={props.dish[0]} />
					<RenderCommets dish={props.dish[0].comments} />
				</div>
			</div>
		);
	} else {
		<div></div>;
	}
};

export default DishDetail;
