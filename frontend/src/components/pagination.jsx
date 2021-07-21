import React, { useState } from "react";

export default function Pagination({
	data,
	RenderComponent,
	title,
	pageLimit,
	dataLimit,
}) {
	const [pages] = useState(Math.round(1200 / dataLimit));
	const [currentPage, setCurrentPage] = useState(1);

	function goToNextPage() {
		console.log(currentPage);
		setCurrentPage((page) => page + 1);
	}

	function goToPreviousPage() {
		console.log(currentPage);
		setCurrentPage((page) => page - 1);
	}

	function changePage(event) {
		console.log(currentPage);
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}

	const getPaginatedData = () => {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = startIndex + dataLimit;
		return data.slice(startIndex, endIndex);
	};

	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
	};

	return (
		<div className="pagination">
			{/* show the pagiantion
            it consists of next and previous buttons
            along with page numbers, in our case, 5 page
            numbers at a time
        */}
			{/* previous button */}
			<button
				onClick={goToPreviousPage}
				className={`prev ${currentPage === 1 ? "disabled" : ""}`}
			>
				prev
			</button>

			{/* show page numbers */}
			{getPaginationGroup().map((item, index) => (
				<button
					key={index}
					onClick={changePage}
					className={`paginationItem ${currentPage === item ? "active" : null}`}
				>
					<span>{item}</span>
				</button>
			))}

			{/* next button */}
			<button
				onClick={goToNextPage}
				className={`next ${currentPage === pages ? "disabled" : ""}`}
			>
				next
			</button>
		</div>
	);
}
