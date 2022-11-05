function Section(props) {
    return (
        <div className="container-fluid section" style={{ backgroundColor: props.bgcolor }}>
            <div className="container row">
                <div className="col-6 d-flex justify-content-center">Hola</div>
                <div className="col-6 d-flex justify-content-center">Hola</div>
            </div>
        </div>
    );
}

export default Section;