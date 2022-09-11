import { Container, Row, Col } from "react-bootstrap";

export default function InPatientScreen({ status }) {
	if (status.isDischarging) {
		return (
			<Container
				style={{
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<p
					style={{
						width: "100%",
						fontSize: 20,
						paddingBottom: 20,
						maxWidth: 850,
					}}
				>
					The patient is scheduled to be discharge on{" "}
					<b>{status.dischargeDate}</b> at{" "}
					<b>{status.dischargeTime}</b>. Please be at{" "}
					<b>
						ward {status.ward} bed {status.bed}
					</b>{" "}
					half an hour before the discharge timing to pick up the
					patient.
				</p>

				<DischargeMessage index={status.dischargeInfo} />
			</Container>
		);
	}

	return (
		<Container
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<p style={{ fontSize: 20, paddingBottom: 20, textAlign: "center" }}>
				The patient is currently admitted to Alexandra Hospital
			</p>
			<Row style={{ width: "100%", maxWidth: 300 }}>
				<Col xs={6}>
					<p
						style={{
							fontSize: 30,
							fontWeight: 700,
							textAlign: "center",
						}}
					>
						Ward
					</p>
					<p
						style={{
							fontSize: 70,
							margin: 0,
							fontWeight: 500,
							textAlign: "center",
						}}
					>
						{status.ward}
					</p>
				</Col>
				<Col xs={6}>
					<p
						style={{
							fontSize: 30,
							fontWeight: 700,
							textAlign: "center",
						}}
					>
						Bed
					</p>
					<p
						style={{
							fontSize: 70,
							margin: 0,
							fontWeight: 500,
							textAlign: "center",
						}}
					>
						{status.bed}
					</p>
				</Col>
			</Row>
		</Container>
	);
}

function DischargeMessage({ index }) {
	if (index === 0) {
		return (
			<p
				style={{
					width: "100%",
					fontSize: 20,
					paddingBottom: 20,
					maxWidth: 850,
				}}
			>
				Upon discharge, please head down to the pharmacy on level 1 to
				collect the patient's medication. To ensure minimal waiting time
				at the pharmacy, the patient will only be discharged when the
				medication is ready, so please be patient.
			</p>
		);
	}
	if (index === 1) {
		return (
			<p
				style={{
					width: "100%",
					fontSize: 20,
					paddingBottom: 20,
					maxWidth: 850,
				}}
			>
				For your convenience, the patient's medication will be delivered
				directly to the ward on the day of discharge. You do not need to
				collect any medication from the pharmacy.
			</p>
		);
	}
	if (index === 2) {
		return (
			<p
				style={{
					width: "100%",
					fontSize: 20,
					paddingBottom: 20,
					maxWidth: 850,
				}}
			>
				The pharmacist would like to speak to the patient's family
				members or caregiver regarding the patient's medication. In the
				event where there is a large number of patients being discharged
				on that day, please kindly wait for your turn to speak to the
				pharmacist.
			</p>
		);
	}
	return null;
}
