function Footer(props) {
    return (
        <div className="container-fluid footer" style={{ backgroundColor: props.bgcolor }}>
            <div className="container-fluid row d-inline-block mx-auto" style={{ paddingTop: props.paddingTop }}>
                {/* <div className="col-4"></div> */}
                <i className="fa-brands fa-facebook col-6" style={{ height: props.iconHeight }}></i>
                <i className="fa-brands fa-instagram col-6" style={{ height: props.iconHeight }}></i>
                {/* <div className="col-4"></div> */}
            </div>
        </div >
    );
}

export default Footer;