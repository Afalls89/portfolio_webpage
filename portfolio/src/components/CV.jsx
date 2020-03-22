import React from "react";

// import { Document } from "react-pdf/dist/entry.parcel";
// import { Document, pdfjs } from "react-pdf";

// import { Document, pdfjs } from "react-pdf/dist/entry.webpack";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV = () => {
	return (
		<div className="content">
			<img className="cvPic" src="CVpage1.jpg" />
			<img className="cvPic" src="CVpage2.jpg" />
			{/* <Document file="AndrewFallsCV2020.pdf" /> */}
		</div>
	);
};

export default CV;
