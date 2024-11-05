import './table_loaded_file.css'


function TableLoadedFile() {
    const data = [
        { name: "Tài liệu 1", format: "PDF", pages: 10, uploadDate: "2024-01-01" },
        { name: "Tài liệu 2", format: "DOCX", pages: 5, uploadDate: "2024-01-02" },
        { name: "Tài liệu 3", format: "PPTX", pages: 15, uploadDate: "2024-01-03" },
        { name: "Tài liệu 4", format: "PDF", pages: 8, uploadDate: "2024-01-04" },
        { name: "Tài liệu 5", format: "PDF", pages: 11, uploadDate: "2024-01-04" },
        { name: "Tài liệu 6", format: "DOCX", pages: 5, uploadDate: "2024-01-05" },
        { name: "Tài liệu 7", format: "DOCX", pages: 4, uploadDate: "2024-01-08" },
    ];

    const renderTableRows = () => {
        return data.map((item, index) => (
            <tr className='row-of-table' key={index}>
                <td className='c1-of-table'>{index + 1}</td>
                <td className='c2-of-table'>{item.name}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" className='three-dots-more-detail'>
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                    </svg>
                </td>
                <td className='c3-of-table'>{item.format}</td>
                <td className='c4-of-table'>{item.pages}</td>
                <td className='c5-of-table'>{item.uploadDate}</td>
            </tr>
        ));
    }

    return(
        <div className="box-contain-table">
            <table className="contain_loaded_file">
                <thead>
                    <tr className='row-of-table'>
                        <th className='c1-of-table'>STT</th>
                        <th className='c2-of-table'>Tài liệu đã tải lên</th>
                        <th className='c3-of-table'>Định dạng</th>
                        <th className='c4-of-table'>Số trang</th>
                        <th className='c5-of-table'>Ngày tải lên</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableRows()}
                </tbody>
            </table>
        </div>
    );
}

export default TableLoadedFile