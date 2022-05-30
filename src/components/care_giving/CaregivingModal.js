import { Image, Row, Modal } from "react-bootstrap";
import YouTube from "../Youtube";

export function CaregivingModal({ openModal, setOpenModal, caregiving }) {
	if (caregiving === null) return null;
	const components = [];
	console.log(caregiving);
	caregiving.content.forEach((item) => {
		switch (item.type) {
			case "purpose":
				components.push(
					<p
						style={{
							fontSize: 23,
							fontWeight: 500,
							paddingTop: 10,
						}}
					>
						{item.content}
					</p>
				);
				break;
			case "subheader":
				components.push(
					<p style={{ fontSize: 17, paddingBottom: 20 }}>
						{item.content}
					</p>
				);
				break;
			case "image":
				components.push(
					<Image
						src={item.content}
						style={{
							width: "75%",
							aspectRatio: 1,
							objectFit: "contain",
						}}
					/>
				);
				break;
			case "video":
				components.push(<YouTube url={item.content} />);
				break;
			case "section":
				components.push(
					<p
						style={{
							fontWeight: 700,
							fontSize: 17,
							paddingTop: 20,
							paddingBottom: 10,
						}}
					>
						{item.content}
					</p>
				);
				break;
			case "instruction":
				components.push(
					<p style={{ paddingBottom: 10 }}> {item.content} </p>
				);
				break;
			default: {
				components.push(
					<p style={{ fontStyle: "italic", paddingBottom: 10 }}>
						{item.content}
					</p>
				);
			}
		}
	});
	return (
		<Modal show={openModal} onHide={() => setOpenModal(false)} centered>
			<Row style={{ padding: 20 }}>{components}</Row>
		</Modal>
	);
}
