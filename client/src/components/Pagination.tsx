import React, { FC } from 'react'

interface Iprops {
    productsPerPage: number;
    totalProducts: number;
    paginate: (number: number) => any;
    currentPage: number;
    setCurrentPage: any
}

const Pagination: FC<Iprops> = ({
    productsPerPage,
    totalProducts,
    paginate,
    currentPage,
    setCurrentPage
}) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination">
                    <li
                        className="page-item"
                        onClick={() => {
                            if (currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                            }
                        }}>
                        <span className="page-link">Previous</span>
                    </li>
                    {pageNumbers.map((number) => (
                        <li
                            key={number}
                            className={number === currentPage ? 'page-item active' : 'page-item'}
                            onClick={() => paginate(number)}>
                            <span className="page-link">{number}</span>
                        </li>
                    ))}
                    <li
                        className="page-item"
                        onClick={() => {
                            if (currentPage < pageNumbers[pageNumbers.length-1]) {
                                setCurrentPage(currentPage + 1);
                            } else {
                                setCurrentPage(pageNumbers.length);
                            }
                        }}>
                        <span className="page-link">Next</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
