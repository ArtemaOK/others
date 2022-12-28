function Footer(props) {
    return (
        <footer className="container-fluid footer" style={{ backgroundColor: props.bgcolor }}>
            <div className="container-fluid d-flex justify-content-center" style={{ paddingTop: props.paddingTop }}>
                {/* <div className="col-4"></div> */}
                <i className="fa-brands fa-facebook footer-icons" style={{ height: props.iconHeight }}></i>
                <i className="fa-brands fa-instagram footer-icons" style={{ height: props.iconHeight }}></i>
                {/* <div className="col-4"></div> */}
            </div>
        </footer >
    );
}

export default Footer;